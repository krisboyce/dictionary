from typing import Any
import inspect
import json
from flask import Flask, Response
from worddive.word_service import WordService


class App(Flask):
    def Use(self, middleware):
        self.wsgi_app = middleware(self.wsgi_app)


app = App(__name__, template_folder="templates")


@app.route('/define/<word>')
def define(word):
    service = WordService()
    word_definition = service.get_word(word)
    return JsonResponse(word_definition)


@app.route('/search/<query>')
def search(query):
    service = WordService()
    results = service.search(query)
    return JsonResponse(results)


@app.route('/analyze/<word>')
def lemma(word):
    service = WordService()
    lemmas = service.get_lemmas(word)

    return JsonResponse(lemmas)

@app.route('/random')
def random():
    service = WordService()
    return JsonResponse(service.random())

def JsonResponse(data: Any):
    return Response(json.dumps(data, default=lambda o: o.__dict__, indent=4), mimetype='application/json', headers={'Access-Control-Allow-Origin': '*'})
