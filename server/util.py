import cv2

def classify_image(image_base64_data, file_path=None):
    pass

def cropp_image_if_2_eyes(image_path, image_base64_data):
    face_cascade = cv2.CascadeClassifier(
         cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
    )
    eye_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + 'haarcascade_eye.xml'
    )

    if image_path:
        img = cv2.imread(image_path)
    else:
        img = get_cv2_image_from_base64_string(image_base64_data)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = 
def get_b64_test_image_for_virat():
    with open("b64.txt") as f:
        return f.read()
    


if __name__ == "__main__":
    print(classify_image(get_b64_test_image_for_virat(), None))