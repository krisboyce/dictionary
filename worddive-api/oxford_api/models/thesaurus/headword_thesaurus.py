from typing import List
from .thesaurus_lexical_entry import ThesaurusLexicalEntry


class HeadwordThesaurus:
    def __init__(self, api_result):
        self.id: str = api_result.get('id')
        self.language: str = api_result.get('language')
        self.lexical_entries: List[ThesaurusLexicalEntry] = [
            ThesaurusLexicalEntry(e) for e in api_result.get('lexicalEntries') or []]
        self.type: str = api_result.get('type')
        self.word: str = api_result.get('word')
