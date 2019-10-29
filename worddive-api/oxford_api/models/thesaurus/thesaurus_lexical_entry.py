from typing import List
from .thesaurus_entry import ThesaurusEntry
from oxford_api.models.common.grammatical_feature import GrammaticalFeature
from oxford_api.models.common.lexical_category import LexicalCategory
from oxford_api.models.common.variant_form import VariantForm


class ThesaurusLexicalEntry:
    def __init__(self, api_response):
        self.entries: List[ThesaurusEntry] = [ThesaurusEntry(
            e) for e in api_response.get('entries') or []]
        self.grammatical_features: List[GrammaticalFeature] = [
            GrammaticalFeature(f) for f in api_response.get('grammaticalFeatures') or []]
        self.language: str = api_response.get('language')
        lex_cat = api_response.get('lexicalCategory')
        self.lexical_category = LexicalCategory(lex_cat) if lex_cat else None
        self.text = api_response.get('text')
        self.variant_forms: List[VariantForm] = [VariantForm(
            f) for f in api_response.get('variantForms') or []]
