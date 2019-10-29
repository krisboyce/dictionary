from typing import List
from .headword_thesaurus import HeadwordThesaurus


class Thesaurus:
    def __init__(self, api_response):
        self.id = api_response.get('id')
        self.metadata = api_response.get('metadata')
        self.results: List[HeadwordThesaurus] = [
            HeadwordThesaurus(t) for t in api_response.get('results') or []]
