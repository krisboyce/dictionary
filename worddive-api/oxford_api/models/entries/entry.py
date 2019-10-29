from typing import List
from oxford_api.models.common.pronunciation import Pronunciation
from oxford_api.models.common.grammatical_feature import GrammaticalFeature
from oxford_api.models.common.variant_form import VariantForm
from oxford_api.models.common.categorized_text import CategorizedText
from .sense import Sense


class Entry:
    def __init__(self, api_result):
        self.homograph_number: str = api_result.get('homographNumber')
        self.etymologies: List[str] = api_result.get('etymologies')
        self.grammatical_features: List[GrammaticalFeature] = [
            GrammaticalFeature(f) for f in api_result.get('grammaticalFeatures') or []]
        self.notes: List[CategorizedText] = [
            CategorizedText(n) for n in api_result.get('notes') or []]
        self.pronunciations: List[Pronunciation] = [
            Pronunciation(p) for p in api_result.get('pronunciation') or []]
        self.senses: List[Sense] = [Sense(s)
                                    for s in api_result.get('senses') or []]
        self.variant_forms: List[VariantForm] = [VariantForm(
            f) for f in api_result.get('variantForms') or []]
