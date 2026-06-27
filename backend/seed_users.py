from app.core.security import hash_password
from app.database import SessionLocal
from app.models.officer import Officer

db = SessionLocal()

PASSWORD = "Kodagu@123"

officers = [

    # -----------------------
    # MADIKERI
    # -----------------------

    ("Madikeri","Aiyangeri"),
    ("Madikeri","Ballamavati"),
    ("Madikeri","Bengoor Cherambane"),
    ("Madikeri","Bettageri"),
    ("Madikeri","Bhagamandala"),
    ("Madikeri","Chembu"),
    ("Madikeri","Galibeedu"),
    ("Madikeri","Hakathur"),
    ("Madikeri","Hoddur"),
    ("Madikeri","Hosakeri"),
    ("Madikeri","Kadagadalu"),
    ("Madikeri","Kalakeri Nidugane"),
    ("Madikeri","Kanthur Murnad"),
    ("Madikeri","Karike"),
    ("Madikeri","Konanjageri (Perane)"),
    ("Madikeri","Kundacheri"),
    ("Madikeri","Kunjila (Kakkabbe)"),
    ("Madikeri","Made"),
    ("Madikeri","Makkanduru"),
    ("Madikeri","Maragodu"),
    ("Madikeri","Mekeri"),
    ("Madikeri","Napoklu"),
    ("Madikeri","Nariyandada"),
    ("Madikeri","Peraje"),
    ("Madikeri","Sampaje"),
    ("Madikeri","Yavakapadi"),

    # -----------------------
    # PONNAMPET
    # -----------------------

    ("Ponnampet","Aruvatoklu"),
    ("Ponnampet","B. Shettigeri"),
    ("Ponnampet","Balele"),
    ("Ponnampet","Balyamandur"),
    ("Ponnampet","Birunani"),
    ("Ponnampet","Devarapura"),
    ("Ponnampet","Gonikoppal"),
    ("Ponnampet","Hathur"),
    ("Ponnampet","Hudikeri"),
    ("Ponnampet","Kanur"),
    ("Ponnampet","Kirgur"),
    ("Ponnampet","Kutta"),
    ("Ponnampet","Mayamudi"),
    ("Ponnampet","Nalkeri"),
    ("Ponnampet","Nittur"),
    ("Ponnampet","Ponnampete"),
    ("Ponnampet","Ponnappasanthe"),
    ("Ponnampet","Srimangala"),
    ("Ponnampet","T. Shettigeri"),
    ("Ponnampet","Thithimathi"),
    ("Ponnampet","V.Badaga"),

    # -----------------------
    # VIRAJPET
    # -----------------------

    ("Virajpet","Ammathi"),
    ("Virajpet","Arji"),
    ("Virajpet","Betoli"),
    ("Virajpet","Bilugunda"),
    ("Virajpet","Bittangala"),
    ("Virajpet","Chembe Bellur"),
    ("Virajpet","Chennayana Kote"),
    ("Virajpet","Halugunda"),
    ("Virajpet","Hathur"),
    ("Virajpet","Hosur"),
    ("Virajpet","Kadanur"),
    ("Virajpet","Kakotuparambu"),
    ("Virajpet","Kannangala"),
    ("Virajpet","Karmadu"),
    ("Virajpet","Kedamullur"),
    ("Virajpet","Maldare"),
    ("Virajpet","Polibetta"),
    ("Virajpet","Siddapura"),

    # -----------------------
    # SOMWARPET
    # -----------------------

    ("Somwarpet","Aigur"),
    ("Somwarpet","Alur"),
    ("Somwarpet","Bedagotta"),
    ("Somwarpet","Belur"),
    ("Somwarpet","Besur"),
    ("Somwarpet","Bettadalli"),
    ("Somwarpet","Chowdlu"),
    ("Somwarpet","Doddamolathe"),
    ("Somwarpet","Dundalli"),
    ("Somwarpet","Ganagur"),
    ("Somwarpet","Garuvale"),
    ("Somwarpet","Gowdalli"),
    ("Somwarpet","Hanagallu"),
    ("Somwarpet","Handli"),
    ("Somwarpet","Haradur"),
    ("Somwarpet","Kiragandur"),
    ("Somwarpet","Kodlipet"),
    ("Somwarpet","Madapura"),
    ("Somwarpet","Nerugalale"),
    ("Somwarpet","Nidta"),
    ("Somwarpet","Shanivara Santhe"),
    ("Somwarpet","Shanthalli"),
    ("Somwarpet","Tholur Shettalli"),

    # -----------------------
    # KUSHALNAGAR
    # -----------------------

    ("Kushalnagar","7Th Hoskote"),
    ("Kushalnagar","Chettalli"),
    ("Kushalnagar","Guddehosur"),
    ("Kushalnagar","Hebbale"),
    ("Kushalnagar","Kambibane"),
    ("Kushalnagar","Kedakal"),
    ("Kushalnagar","Kodagarahalli"),
    ("Kushalnagar","Kudige"),
    ("Kushalnagar","Kudumangalore"),
    ("Kushalnagar","Nakur Sirangala"),
    ("Kushalnagar","Nanjarayapatna"),
    ("Kushalnagar","Nelliyahudikeri"),
    ("Kushalnagar","Sirangala"),
    ("Kushalnagar","Suntikoppa"),
    ("Kushalnagar","Torenur"),
    ("Kushalnagar","Valnur Thyagathur"),
]

created = 0

for taluk, panchayat in officers:

    clean_taluk = (
        taluk.lower()
        .replace(" ", "_")
    )

    clean_panchayat = (
        panchayat.lower()
        .replace(" ", "_")
        .replace(".", "")
        .replace("(", "")
        .replace(")", "")
    )

    username = f"{clean_taluk}_{clean_panchayat}_admin"

    exists = db.query(Officer).filter(
        Officer.username == username
    ).first()

    if exists:
        continue

    officer = Officer(
        name=f"{panchayat} Officer",
        phone="9999999999",
        email=f"{username}@swachhai.in",
        govt_id=f"{username}_ID",
        taluk=taluk,
        panchayat=panchayat,
        username=username,
        password=hash_password(PASSWORD),
        role="officer",
    )

    db.add(officer)
    created += 1

mla_accounts = [

    {
        "name": "Mantar Gowda",
        "username": "MLAMantarGowda",
        "password": "MantarGowdaMLA",
        "taluk": "Madikeri"
    },

    {
        "name": "A. S. Ponnanna",
        "username": "MLAPonnanna",
        "password": "PonnannaMLA",
        "taluk": "Virajpet"
    }

]

for mla in mla_accounts:

    existing = db.query(Officer).filter(
        Officer.username == mla["username"]
    ).first()

    if existing:
        continue

    db.add(

        Officer(

            name=mla["name"],

            phone="9999999999",

            email=f'{mla["username"]}@swachhai.in',

            govt_id=f'{mla["username"]}_ID',

            taluk=mla["taluk"],

            panchayat="ALL",

            username=mla["username"],

            password=hash_password(
                mla["password"]
            ),

            role="mla"

        )

    )

db.commit()

print("=" * 50)
print(f"{created} Officer Accounts Created")
print("Default Officer Password : Kodagu@123")
print("2 MLA Accounts Created Successfully")
print("MLA Login IDs:")
print("  • MLAMantarGowda")
print("  • MLAPonnanna")
print("=" * 50)
db.close()