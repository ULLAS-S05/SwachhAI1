from app.services.gemini_service import analyze_garbage_image

result = analyze_garbage_image(
    "uploads/test.png"
)

print(result)
