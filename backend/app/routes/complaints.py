from fastapi import Depends
from app.auth.roles import require_role
from app.core.security import verify_password, hash_password
from app.auth.jwt_handler import create_access_token
from fastapi import APIRouter, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from uuid import uuid4
import shutil
import os
import re

from app.database import SessionLocal

from app.models.complaint import Complaint
from app.models.officer import Officer

from app.schemas.complaint import ComplaintCreate
from app.schemas.officer import (
    OfficerCreate,
    OfficerLogin,
    ChangePassword
)

from app.services.gemini_service import analyze_garbage_image
from app.services.cleanliness_service import compare_images

router = APIRouter()

# ---------------------------
# Complaint Registration
# ---------------------------

@router.post("/report")
def create_complaint(data: ComplaintCreate):

    db: Session = SessionLocal()

    complaint = Complaint(
        complaint_id=str(uuid4())[:8],

        district=data.district,
        taluk=data.taluk,
        panchayat=data.panchayat,
        village=data.village,

        description=data.description,

        latitude=data.latitude,
        longitude=data.longitude,

        before_image=data.before_image,

        status="PENDING"
    )

    db.add(complaint)
    db.commit()
    db.refresh(complaint)

    return {
        "complaint_id": complaint.complaint_id,
        "status": complaint.status
    }


# ---------------------------
# Image Upload + AI
# ---------------------------

@router.post("/upload")
def upload_image(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    ai_result = analyze_garbage_image(file_path)

    return {
        "success": True,
        "filename": file.filename,
        "path": file_path,
        "ai_result": ai_result
    }


# ---------------------------
# Get Complaints
# ---------------------------

@router.get("/complaints")
def get_complaints(

    current_user = Depends(
        require_role(
            "officer",
            "mla",
            "admin"
        )
    )

):

    db: Session = SessionLocal()

    return db.query(Complaint).all()


# ---------------------------
# Update Status
# ---------------------------

@router.put("/complaints/{complaint_id}/status")
def update_status(

    complaint_id: str,

    status: str,

    current_user = Depends(
        require_role(
            "officer",
            "admin"
        )
    )

):

    db: Session = SessionLocal()

    complaint = db.query(
        Complaint
    ).filter(
        Complaint.complaint_id == complaint_id
    ).first()

    if not complaint:
        raise HTTPException(
            status_code=404,
            detail="Complaint not found"
        )

    complaint.status = status

    db.commit()

    return {
        "message": "Status Updated"
    }


# ---------------------------
# Track Complaint
# ---------------------------

@router.get("/track/{complaint_id}")
def track_complaint(
    complaint_id: str
):

    db: Session = SessionLocal()

    complaint = db.query(
        Complaint
    ).filter(
        Complaint.complaint_id == complaint_id
    ).first()

    if not complaint:
        raise HTTPException(
            status_code=404,
            detail="Complaint not found"
        )

    return complaint


# ---------------------------
# After Image Upload
# ---------------------------

@router.put("/complaints/{complaint_id}/after-image")
def upload_after_image(

    complaint_id: str,

    image_path: str,

    current_user = Depends(
        require_role(
            "officer",
            "admin"
        )
    )

):

    db = SessionLocal()

    complaint = db.query(
        Complaint
    ).filter(
        Complaint.complaint_id == complaint_id
    ).first()

    if not complaint:
        raise HTTPException(
            status_code=404,
            detail="Complaint not found"
        )

    complaint.after_image = image_path

    ai_result = compare_images(
        complaint.before_image,
        complaint.after_image
    )
    complaint.status = "RESOLVED"

    db.commit()

    return {
        "message": "After image uploaded",
        "ai_status": ai_result["status"],
        "ai_score": ai_result["score"]
    }


# ---------------------------
# Officer Register
# ---------------------------

@router.post("/register")
def register_officer(

    data: OfficerCreate,

    current_user = Depends(
        require_role(
            "admin"
        )
    )

):

    db = SessionLocal()

    existing_panchayat = db.query(
        Officer
    ).filter(
        Officer.panchayat == data.panchayat
    ).first()

    if existing_panchayat:
        raise HTTPException(
            status_code=400,
            detail="Panchayat already registered"
        )

    expected_prefix = (
        data.panchayat.lower()
        .replace(" ", "_")
    )

    if not data.username.lower().startswith(expected_prefix):
        raise HTTPException(
            status_code=400,
            detail=f"Username must start with {expected_prefix}"
        )

    password = data.password

    if (
        len(password) < 8
        or not re.search(r"[A-Z]", password)
        or not re.search(r"[a-z]", password)
        or not re.search(r"[0-9]", password)
        or not re.search(r"[^A-Za-z0-9]", password)
    ):
        raise HTTPException(
            status_code=400,
            detail="Password must contain 8+ chars, uppercase, lowercase, number and special character"
        )

    officer = Officer(

    name=data.name,
    phone=data.phone,
    email=data.email,
    govt_id=data.govt_id,

    taluk=data.taluk,
    panchayat=data.panchayat,

    username=data.username,

    password=hash_password(data.password),

    role="officer"

)

    db.add(officer)
    db.commit()

    return {
        "message":
        "Officer Registered Successfully"
    }


# ---------------------------
# Unified Login
# ---------------------------

@router.post("/login")
def login(data: OfficerLogin):

    db = SessionLocal()

    user = db.query(Officer).filter(
        Officer.username == data.username
    ).first()

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    if not verify_password(
        data.password,
        user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    token = create_access_token({

        "sub": user.username,

        "role": user.role,

        "name": user.name

    })

    return {

        "access_token": token,

        "token_type": "bearer",

        "role": user.role,

        "name": user.name,

        "phone": user.phone,

        "email": user.email,

        "taluk": user.taluk,

        "panchayat": user.panchayat

    }
# ---------------------------
# Change Password
# ---------------------------

@router.put("/change-password")
def change_password(

    data: ChangePassword,

    current_user = Depends(
        require_role(
            "officer",
            "mla",
            "admin"
        )
    )

):

    db = SessionLocal()

    user = db.query(Officer).filter(
        Officer.username == current_user.username
    ).first()

    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(
        data.current_password,
        user.password
    ):

        raise HTTPException(
            status_code=400,
            detail="Current password is incorrect"
        )

    user.password = hash_password(
        data.new_password
    )

    db.commit()

    return {
        "message": "Password changed successfully"
    }
# ---------------------------
# Homepage Statistics
# ---------------------------

@router.get("/homepage/stats")
def homepage_stats():

    db = SessionLocal()

    total = db.query(Complaint).count()

    resolved = db.query(Complaint).filter(
        Complaint.status == "RESOLVED"
    ).count()

    pending = db.query(Complaint).filter(
        Complaint.status == "PENDING"
    ).count()

    in_progress = db.query(Complaint).filter(
        Complaint.status == "IN_PROGRESS"
    ).count()

    villages = db.query(
        Complaint.village
    ).distinct().count()

    accuracy = (
        round((resolved / total) * 100, 1)
        if total else 0
    )

    return {
        "total": total,
        "resolved": resolved,
        "pending": pending,
        "in_progress": in_progress,
        "villages": villages,
        "accuracy": accuracy
    }
@router.get("/analytics/overview")
def analytics_overview():

    db = SessionLocal()

    total = db.query(Complaint).count()

    pending = db.query(Complaint).filter(
        Complaint.status == "PENDING"
    ).count()

    in_progress = db.query(Complaint).filter(
        Complaint.status == "IN_PROGRESS"
    ).count()

    resolved = db.query(Complaint).filter(
        Complaint.status == "RESOLVED"
    ).count()

    taluks = db.query(
        Complaint.taluk
    ).distinct().count()

    panchayats = db.query(
        Complaint.panchayat
    ).distinct().count()

    resolution_rate = (
        round((resolved / total) * 100, 2)
        if total else 0
    )

    return {
        "total": total,
        "pending": pending,
        "in_progress": in_progress,
        "resolved": resolved,
        "resolution_rate": resolution_rate,
        "taluks": taluks,
        "panchayats": panchayats
    }
