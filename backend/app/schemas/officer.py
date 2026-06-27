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

    role: str = "officer"


class OfficerLogin(BaseModel):

    username: str
    password: str


class ChangePassword(BaseModel):

    current_password: str
    new_password: str