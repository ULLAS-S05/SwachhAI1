from app.services.cleanliness_service import compare_images

result = compare_images(
    "before.jpg",
    "after.jpg"
)

print(result)
