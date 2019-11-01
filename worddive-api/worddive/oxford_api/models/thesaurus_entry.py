from typing import List, Any
from .grammatical_feature import GrammaticalFeature
from .variant_form import VariantForm
from .thesaurus_sense import ThesaurusSense


class ThesaurusEntry:
    def __init__(self, api_result: Any):
        self.grammatical_features: List[GrammaticalFeature] = [GrammaticalFeature(f) for f in api_result.get('grammaticalFeatures') or []]
        self.homograph_number: str = api_result.get('homographNumber')
        self.senses: List[ThesaurusSense] = [ThesaurusSense(s) for s in api_result.get('senses') or []]
        self.variant_forms: List[VariantForm] = [VariantForm(f) for f in api_result.get('variantForms') or []]
