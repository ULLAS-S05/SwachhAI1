
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.database import engine, Base

from app.models.complaint import Complaint
from app.models.officer import Officer

from app.routes.complaints import router

Base.metadata.create_all(bind=engine)
import seed_users

app = FastAPI(title="SwachhAI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "SwachhAI Running"
    }
