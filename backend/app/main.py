from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine, SessionLocal
from app.models.officer import Officer
from app.models.complaint import Complaint
from app.routes.complaints import router

app = FastAPI(title="SwachhAI API")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://swachh-ai-1.vercel.app",
        "https://swachhai1.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "SwachhAI Backend Running"
    }

@app.get("/debug-db")
def debug_db():
    db = SessionLocal()

    return {
        "complaints": db.query(Complaint).count(),
        "officers": db.query(Officer).count()
    }
@app.get("/test-mla")
def test_mla():

    from app.database import SessionLocal
    from app.models.officer import Officer

    db = SessionLocal()

    user = db.query(Officer).filter(
        Officer.username == "MLAMantarGowda"
    ).first()

    if not user:
        return {"found": False}

    return {
        "found": True,
        "username": user.username,
        "role": user.role,
        "email": user.email
    }