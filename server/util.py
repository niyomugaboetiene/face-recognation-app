
def classify_image(image_base64_data, file_path=None):
    pass

def get_b64_test_image_for_virat():
    with open("b64.txt") as f:
        return f.read()
    


if __name__ == "__main__":
    print(classify_image(get_b64_test_image_for_virat(), None))