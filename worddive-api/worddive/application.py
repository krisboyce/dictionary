import inspect
import json
from os import environ

from flask import Flask, Response

from worddive.services.word_service import WordService


class App(Flask):
    def Use(self, middleware):
        self.wsgi_app = middleware(self.wsgi_app)


app = App(__name__, template_folder="templates")


@app.route('/')
def index():
    return "test"


@app.route('/define/<word>')
def define(word):
    service = WordService(environ['APP_ID'], environ['APP_KEY'])
    word_definition = service.get_word(word)
    return Response(json.dumps(word_definition,
                    default=lambda o: o.__dict__, indent=4),
                    mimetype='application/json')


@app.route('/thesaurus/<word>')
def thes(word):
    service = WordService(environ['APP_ID'], environ['APP_KEY'])
    return service.thesaurus(word)
