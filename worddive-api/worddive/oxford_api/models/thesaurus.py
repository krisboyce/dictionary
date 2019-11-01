from typing import List, Any
from .headword_thesaurus import HeadwordThesaurus


class Thesaurus:
    def __init__(self, api_result: Any):
        self.id = api_result.get('id')
        self.metadata = api_result.get('metadata')
        self.results: List[HeadwordThesaurus] = [
            HeadwordThesaurus(t) for t in api_result.get('results') or []]
