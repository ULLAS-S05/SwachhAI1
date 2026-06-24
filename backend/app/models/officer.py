from sqlalchemy import Column, Integer, String
from app.database import Base

class Officer(Base):

    __tablename__ = "officers"

    id = Column(Integer, primary_key=True)

    name = Column(String)

    phone = Column(String)

    email = Column(String)

    govt_id = Column(
        String,
        unique=True
    )

    taluk = Column(String)

    panchayat = Column(
        String,
        unique=True
    )

    username = Column(
        String,
        unique=True
    )

    password = Column(String)
