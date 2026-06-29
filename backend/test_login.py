from app.database import SessionLocal
from app.models.officer import Officer
from app.core.security import verify_password

db = SessionLocal()

user = db.query(Officer).filter(
    Officer.username == "MLAMantarGowda"
).first()

print("Found:", user is not None)

if user:
    print(
        verify_password(
            "Ullas@05",
            user.password
        )
    )