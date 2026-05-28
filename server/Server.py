from flask import Flask, request, jsonify

app = Flask(__name__)

# @app.route('/hello')
# def hello():
#     return "Hi"
@app.route('/classify_image', methoods = ['GET', 'POST'])
def classify_image():
    pass

if __name__ == "__main__":
    app.run(port=5000)