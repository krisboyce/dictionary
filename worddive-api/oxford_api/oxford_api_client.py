from os import environ
from typing import Dict
import requests
from .models.entries.retrieve_entry import RetrieveEntry
from .models.thesaurus.thesaurus import Thesaurus
from .models.search.wordlist import Wordlist


class OxfordApiService:
    _uri = "https://od-api.oxforddictionaries.com/api/v2/"

    def __init__(self):
        self.clientId = environ['APP_ID']
        self.clientSecret = environ['APP_KEY']
        return

    def entries(self, word: str, language:str = 'en-us', params:Dict[str, str] = {}) -> RetrieveEntry:
        return RetrieveEntry(self._get('entries/' + language + '/' + word, params=params))

    def thesaurus(self, word: str, language:str = 'en-us', params:Dict[str, str] = {}) -> Thesaurus:
        return Thesaurus(self._get('thesaurus/'+ language +'/' + word, params=params))

    def search(self, query: str, language: str, params:Dict[str, str] = {}) -> Wordlist:
        return Wordlist(self._get('search/' + language + '?q=' + query, params))

    def _get(self, route, headers={}, params={}):
        res = requests.get(self._uri + route, params=params,
                           headers={'app_id': self.clientId, 'app_key': self.clientSecret}).json()
        return res
