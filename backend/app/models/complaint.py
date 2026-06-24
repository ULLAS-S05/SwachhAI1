from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from app.database import Base

class Complaint(Base):

    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_id = Column(String, unique=True)

    district = Column(String)

    taluk = Column(String)

    panchayat = Column(String)

    village = Column(String)

    description = Column(String)

    latitude = Column(Float)

    longitude = Column(Float)

    before_image = Column(String)

    after_image = Column(String, nullable=True)

    status = Column(String, default="PENDING")

    created_at = Column(DateTime, default=datetime.utcnow)

    resolved_at = Column(DateTime, nullable=True)
