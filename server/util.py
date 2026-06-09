import cv2
import base64
import json
import numpy as np
import joblib
import os

from wavelet import w2d

__class_name_to_number = {}
__class_number_to_name = {}
__model = None


def classify_image(image_base64_data, file_path=None):
    imgs = cropp_image_if_2_eyes(file_path, image_base64_data)

    # print("Images returned from face crop:", len(imgs))

    if len(imgs) == 0:
        # print("No valid face found.")
        return []

    result = []

    # enumerate adds an index
    for img in imgs:
        # print(f"\nProcessing face {i + 1}")

        # scale image because ml model require fixed size inputs
        scalled_raw_img = cv2.resize(img, (32, 32))

        img_har = w2d(img, 'db1', 5)
        scalled_raw_har = cv2.resize(img_har, (32, 32))

        combined_img = np.vstack(
            (
                scalled_raw_img.reshape(32 * 32 * 3, 1),
                scalled_raw_har.reshape(32 * 32, 1)
            )
        )

        len_image_array = (32 * 32 * 3) + (32 * 32)

        final = combined_img.reshape(
            1,
            len_image_array
        ).astype(float)

        prediction = __model.predict(final)[0]

        # print("Prediction:", prediction)

        result.append(__class_name_to_number[int(prediction)])

    return result


def load_saved_artifaces():
    # print("Loading saved artifacts....start")

    global __class_name_to_number
    global __class_number_to_name
    global __model

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    class_dict_path = os.path.join(
        BASE_DIR,
        "artifacts",
        "class_dictonary.json"
    )

    model_path = os.path.join(
        BASE_DIR,
        "artifacts",
        "saved_model.pkl"
    )

    # print("Dictionary Path:", class_dict_path)
    # print("Model Path:", model_path)

    with open(class_dict_path, "r") as f:
        __class_name_to_number = json.load(f)

    __class_number_to_name = {
        v: k for k, v in __class_name_to_number.items()
    }

    if __model is None:
        __model = joblib.load(model_path)

    # print("Classes loaded:")
    # print(__class_name_to_number)

    # print("loading saved artifacts...done")


# convert base64 string into image that open cv can understand and read
def get_cv2_image_from_base64_string(b64str):
    try:
        if ',' in b64str:
            encoded_data = b64str.split(',')[1]
        else:
            encoded_data = b64str

         # convert bytes to numpy array
        nparr = np.frombuffer(
            base64.b64decode(encoded_data),
            np.uint8
        )

        # decode image
        img = cv2.imdecode(
            nparr,
            cv2.IMREAD_COLOR
        )

        if img is None:
            print("Failed to decode image")

        return img

    except Exception as e:
        print("Base64 decode error:", e)
        return None


def cropp_image_if_2_eyes(image_path, image_base64_data):
    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades +
        "haarcascade_frontalface_default.xml"
    )

    eye_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades +
        "haarcascade_eye.xml"
    )

    if image_path:
        # print("Reading image from file:", image_path)
        img = cv2.imread(image_path)
    else:
        # print("Reading image from base64")
        img = get_cv2_image_from_base64_string(
            image_base64_data
        )

    if img is None:
        print("Image is None")
        return []

    # print("Image shape:", img.shape)

    gray = cv2.cvtColor(
        img,
        cv2.COLOR_BGR2GRAY
    )

    faces = face_cascade.detectMultiScale(
        gray,
        scaleFactor=1.3,
        minNeighbors=5
    )

    # print("Faces detected:", len(faces))

    cropped_faces = []

    for (x, y, w, h) in faces:
        roi_gray = gray[y:y+h, x:x+w]

        roi_color = img[y:y+h, x:x+w]

        eyes = eye_cascade.detectMultiScale(
            roi_gray
        )

        # print("Eyes detected:", len(eyes))

        if len(eyes) >= 2:
            # print("Face accepted")
            cropped_faces.append(roi_color)

    # print("\nTotal accepted faces:", len(cropped_faces))

    return cropped_faces


def get_b64_test_image_for_virat():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    b64_path = os.path.join(
        BASE_DIR,
        "b64.txt"
    )

    with open(b64_path) as f:
        return f.read()


if __name__ == "__main__":
    load_saved_artifaces()

    result = classify_image(
        get_b64_test_image_for_virat()
    )

    # print("\nFINAL RESULT:")
    print(result)