
from google import genai
from PIL import Image
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def analyze_garbage_image(image_path):

    try:

        image = Image.open(image_path)

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[
                image,
                """
                Analyze this image carefully.

                Determine whether the image contains:

                - Garbage
                - Waste
                - Plastic litter
                - Trash
                - Dumped waste
                - Unclean surroundings

                Reply ONLY with:

                YES

                or

                NO
                """
            ]
        )

        return response.text.strip()

    except Exception as e:

        print("Gemini Error:", e)

        return f"ERROR: {str(e)}"

