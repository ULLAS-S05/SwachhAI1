from sqlalchemy import Column, Integer, String
from app.database import Base

class Officer(Base):

    __tablename__ = "officers"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    phone = Column(String)

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    govt_id = Column(
        String,
        unique=True,
        nullable=False
    )

    taluk = Column(String)

    panchayat = Column(String)

    username = Column(
        String,
        unique=True,
        nullable=False
    )

    password = Column(
        String,
        nullable=False
    )

    role = Column(
        String,
        default="officer",
        nullable=False
    )