from typing import List, Any, Optional
from .grammatical_feature import GrammaticalFeature
from .inflection import Inflection
from .lexical_category import LexicalCategory


class LemmatronLexicalEntry:
    def __init__(self, api_result: Any):
        self.grammatical_features: List[GrammaticalFeature] = [GrammaticalFeature(f) for f in api_result.get('grammaticalFeatures') or []]
        self.inflection_of: List[Inflection] = [Inflection(i) for i in api_result.get('inflectionOf') or []]
        self.language: str = api_result.get('language')
        self.lexical_category: Optional[LexicalCategory] = LexicalCategory(api_result.get('lexicalCategory')) if api_result.get('lexicalCategory') else None
        self.text: str = api_result.get('text')