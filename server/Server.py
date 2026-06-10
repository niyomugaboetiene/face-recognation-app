from flask import Flask, request, jsonify
import util

app = Flask(__name__)

# @app.route('/hello')
# def hello():
#     return "Hi"
@app.route('/classify_image', methoods = ['GET', 'POST'])
def classify_image():
    image_data = request.form['image_data']

    response = jsonify(util.classify_image(image_data))
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response


if __name__ == "__main__":
    util.load_saved_artifaces()
    app.run(port=5000)