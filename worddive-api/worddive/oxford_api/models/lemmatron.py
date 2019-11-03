from typing import Any, List
from .headword_lemmatron import HeadwordLemmatron


class Lemmatron:
    def __init__(self, api_result: Any):
        self.metadata: Any = api_result.get('metadata')
        self.results: List[HeadwordLemmatron] = [HeadwordLemmatron(r) for r in api_result.get('results') or []]