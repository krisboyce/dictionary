from typing import List, Any
from .headword_entry import HeadwordEntry


class RetrieveEntry:
    def __init__(self, api_result: Any):
        self.id: str = api_result.get('id')
        self.metadata = api_result.get('metadata')
        self.results: List[HeadwordEntry] = [HeadwordEntry(
            r) for r in api_result.get('results') or []]
