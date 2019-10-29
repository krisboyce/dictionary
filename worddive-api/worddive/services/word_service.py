from typing import List
from oxford_api.oxford_api_client import OxfordApiService
from worddive.models.word import Word


class WordService:
    def __init__(self, api_id, api_key):
        self._dictionary = OxfordApiService(api_id, api_key)

    def get_word(self, word) -> List[Word]:
        headwords = self._dictionary.entries(word).results
        thesaurus = self._dictionary.thesaurus(word).results
        words: List[Word] = [Word(headword) for headword in headwords]

        return words
