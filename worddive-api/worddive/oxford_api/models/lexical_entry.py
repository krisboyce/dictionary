from typing import List, Any, Optional
from .entry import Entry
from .pronunciation import Pronunciation
from .related_entry import RelatedEntry
from .grammatical_feature import GrammaticalFeature
from .variant_form import VariantForm
from .categorized_text import CategorizedText
from .lexical_category import LexicalCategory


class LexicalEntry:
    def __init__(self, api_result: Any):
        self.derivative_of: List[RelatedEntry] = [RelatedEntry(
            d) for d in api_result.get('derivativeOf') or []]
        self.derivatives: List[RelatedEntry] = [RelatedEntry(
            d) for d in api_result.get('derivatives') or []]
        self.entries: List[Entry] = [
            Entry(e) for e in api_result.get('entries') or []]
        self.grammatical_features: List[GrammaticalFeature] = [
            GrammaticalFeature(g) for g in api_result.get('grammaticalFeatures') or []]
        self.notes: List[CategorizedText] = [
            CategorizedText(n) for n in api_result.get('notes') or []]
        self.pronunciations: List[Pronunciation] = [Pronunciation(
            p) for p in api_result.get('pronunciations') or []]
        self.variantForms: List[VariantForm] = [VariantForm(
            f) for f in api_result.get('variantForms') or []]

        self.language: str = api_result.get('language')
        self.text: str = api_result.get('text')

        self.lexical_category: Optional[LexicalCategory] = None
        if 'lexicalCategory' in api_result:
            self.lexical_category = LexicalCategory(
                api_result.get('lexicalCategory'))
