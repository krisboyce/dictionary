from typing import List, Any
from oxford_api.models.common.pronunciation import Pronunciation
from .lexical_entry import LexicalEntry


class HeadwordEntry:
    def __init__(self, api_result: Any):
        self.id: str = api_result.get('id')
        self.language: str = api_result.get('language')
        self.type_: str = api_result.get('type')
        self.word: str = api_result.get('word')
        self.lexical_entries: List[LexicalEntry] = [LexicalEntry(
            e) for e in api_result.get('lexicalEntries') or []]
        self.pronunciations: List[Pronunciation] = [Pronunciation(
            p) for p in api_result.get('pronunciations') or []]
        self.id_ = api_result.get('id')
