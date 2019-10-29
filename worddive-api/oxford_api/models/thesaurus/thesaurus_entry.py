from typing import List
from oxford_api.models.common.grammatical_feature import GrammaticalFeature
from oxford_api.models.common.variant_form import VariantForm
from .thesaurus_sense import ThesaurusSense


class ThesaurusEntry:
    def __init__(self, api_response):
        self.grammatical_features: List[GrammaticalFeature] = [GrammaticalFeature(f) for f in api_response.get('grammaticalFeatures') or []]
        self.homograph_number: str = api_response.get('homographNumber')
        self.senses: List[ThesaurusSense] = [ThesaurusSense(s) for s in api_response.get('senses') or []]
        self.variant_forms: List[VariantForm] = [VariantForm(f) for f in api_response.get('variantForms') or []]
