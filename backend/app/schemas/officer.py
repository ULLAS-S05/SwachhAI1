from pydantic import BaseModel, EmailStr

class OfficerCreate(BaseModel):

    name: str
    phone: str
    email: EmailStr
    govt_id: str

    taluk: str
    panchayat: str

    username: str
    password: str


class OfficerLogin(BaseModel):

    username: str
    password: str
