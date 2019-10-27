from os import environ
from flask import Flask
import requests

app = Flask(__name__, template_folder="templates")

@app.route('/')
def index():
    return "test"

@app.route('/define/<word>')
def define(word):
    uri = "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + word
    res = requests.get(uri, headers={'app_id': environ['app_id'], 'app_key': environ['app_key']}, params={'fields': 'definitions'})

    return res.json()


if __name__ == "__main__":
    app.run(debug=True)