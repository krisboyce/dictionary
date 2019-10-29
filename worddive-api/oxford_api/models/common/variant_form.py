from typing import List
from .categorized_text import CategorizedText
from .pronunciation import Pronunciation
from .domain import Domain
from .region import Region
from .register import Register


class VariantForm:
    def __init__(self, api_result):
        self.domains: List[Domain] = [
            Domain(d) for d in api_result.get('domains') or []]
        self.notes: List[CategorizedText] = [
            CategorizedText(n) for n in api_result.get('notes') or []]
        self.pronunciations: List[Pronunciation] = [Pronunciation(
            p) for p in api_result.get('pronunciations') or []]
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]
        self.text: str = api_result.get('text')
