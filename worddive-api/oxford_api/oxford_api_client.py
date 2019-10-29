import requests
from .models.entries.retrieve_entry import RetrieveEntry
from .models.thesaurus.thesaurus import Thesaurus


class OxfordApiService:
    _uri = "https://od-api.oxforddictionaries.com/api/v2/"

    def __init__(self, apiClientId, apiClientSecret):
        self.clientId = apiClientId
        self.clientSecret = apiClientSecret
        return

    def entries(self, word, language='en', params={}) -> RetrieveEntry:
        return RetrieveEntry(self._get('entries/' + language + '/' + word, params=params))

    def thesaurus(self, word, language='en', params={}) -> Thesaurus:
        return Thesaurus(self._get('thesaurus/'+ language +'/' + word, params=params))

    def _get(self, route, headers={}, params={}):
        res = requests.get(self._uri + route, params=params,
                           headers={'app_id': self.clientId, 'app_key': self.clientSecret}).json()
        return res
