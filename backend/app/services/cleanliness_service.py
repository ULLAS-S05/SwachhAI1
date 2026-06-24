import cv2
import os

def compare_images(before_path, after_path):

    if not before_path.startswith("uploads/"):
        before_path = os.path.join(
            "uploads",
            before_path
        )

    before = cv2.imread(before_path)
    after = cv2.imread(after_path)

    if before is None or after is None:
        return {
            "score": 0,
            "status": "ERROR"
        }

    before = cv2.resize(before, (500, 500))
    after = cv2.resize(after, (500, 500))

    diff = cv2.absdiff(before, after)

    score = round(
        100 - ((diff.mean() / 255) * 100),
        2
    )

    status = (
        "CLEANED"
        if score > 80
        else "NOT CLEANED"
    )

    return {
        "score": score,
        "status": status
    }
