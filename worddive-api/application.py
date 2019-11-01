import inspect
import json
from flask import Flask, Response
from worddive.word_service import WordService

class App(Flask):
    def Use(self, middleware):
        self.wsgi_app = middleware(self.wsgi_app)


app = App(__name__, template_folder="templates")


@app.route('/')
def index():
    return "test"


@app.route('/define/<word>')
def define(word):
    service = WordService()
    word_definition = service.get_word(word)
    return Response(json.dumps(word_definition,
                               default=lambda o: o.__dict__, indent=4),
                    mimetype='application/json', headers={
        'Access-Control-Allow-Origin': '*'
    })


@app.route('/search/<query>')
def search(query):
    service = WordService()
    return Response(json.dumps(service.search(query), default=lambda o: o.__dict__, indent=4),
                    mimetype='applicaiton/json', headers={'Access-Control-Allow-Origin': '*'})


@app.route('/analyze/<text>')
def thes(text):
    service = WordService()
    lemmas = service.get_lemma(text)

    return Response(json.dumps(lemmas, indent=4), mimetype='application/json', headers={
        'Access-Control-Allow-Origin': '*'
    })
