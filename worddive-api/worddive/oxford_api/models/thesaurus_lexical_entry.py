from typing import List, Any
from .thesaurus_entry import ThesaurusEntry
from .grammatical_feature import GrammaticalFeature
from .lexical_category import LexicalCategory
from .variant_form import VariantForm


class ThesaurusLexicalEntry:
    def __init__(self, api_result: Any):
        self.entries: List[ThesaurusEntry] = [ThesaurusEntry(
            e) for e in api_result.get('entries') or []]
        self.grammatical_features: List[GrammaticalFeature] = [
            GrammaticalFeature(f) for f in api_result.get('grammaticalFeatures') or []]
        self.language: str = api_result.get('language')
        lex_cat = api_result.get('lexicalCategory')
        self.lexical_category = LexicalCategory(lex_cat) if lex_cat else None
        self.text = api_result.get('text')
        self.variant_forms: List[VariantForm] = [VariantForm(
            f) for f in api_result.get('variantForms') or []]
