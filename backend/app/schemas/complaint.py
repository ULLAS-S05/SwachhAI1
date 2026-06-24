from pydantic import BaseModel

class ComplaintCreate(BaseModel):

    district: str
    taluk: str
    panchayat: str
    village: str

    description: str

    latitude: float

    longitude: float

    before_image: str | None = None
