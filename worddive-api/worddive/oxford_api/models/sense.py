from typing import List, Any
from .pronunciation import Pronunciation
from .construction import Contruction
from .cross_reference import CrossReference
from .domain import Domain
from .example import Example
from .categorized_text import CategorizedText
from .region import Region
from .register import Register
from .thesaurus_link import ThesaurusLink
from .variant_form import VariantForm


class Sense:
    def __init__(self, api_result: Any):
        self.id: str = api_result.get('id')
        self.constructions: List[Contruction] = [Contruction(
            c) for c in api_result.get('constructions') or []]
        self.cross_reference_markers: List[str] = api_result.get(
            'crossReferenceMarkers')
        self.cross_references: List[CrossReference] = [
            CrossReference(r) for r in api_result.get('crossReferences') or []]
        self.definitions: List[str] = api_result.get('definitions')
        self.domains: List[Domain] = [
            Domain(d) for d in api_result.get('domains') or []]
        self.etymologies: List[str] = api_result.get('etymologies')
        self.examples: List[Example] = [
            Example(e) for e in api_result.get('examples') or []]
        self.notes: List[CategorizedText] = [
            CategorizedText(n) for n in api_result.get('notes') or []]
        self.pronunciations: List[Pronunciation] = [Pronunciation(
            p) for p in api_result.get('pronunciations') or []]
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]
        self.short_definitions: List[str] = api_result.get('shortDefinitions')
        self.subsenses: List['Sense'] = [
            Sense(s) for s in api_result.get('subsenses') or []]
        self.thesaurus_links: List[ThesaurusLink] = [
            ThesaurusLink(l) for l in api_result.get('thesaurusLinks') or []]
        self.variant_forms: List[VariantForm] = [VariantForm(
            f) for f in api_result.get('variantForms') or []]
