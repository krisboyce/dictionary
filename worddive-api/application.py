from flask import Flask
import requests

app = Flask(__name__, template_folder="templates")

@app.route('/')
def index():
    return "test"

@app.route('/define/<word>')
def define(word):
    uri = "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + word
    app_id = "f840ecdd"
    app_key = "29db7a8efc7432738a7cb46615b4a122"
    res = requests.get(uri, headers={'app_id': app_id, 'app_key': app_key}, params={'fields': 'definitions'})

    return res.json()


if __name__ == "__main__":
    app.run(debug=True)