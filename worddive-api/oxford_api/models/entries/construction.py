from typing import List, Any
from oxford_api.models.common.domain import Domain
from oxford_api.models.common.categorized_text import CategorizedText
from oxford_api.models.common.region import Region
from oxford_api.models.common.register import Register
from oxford_api.models.common.example import Example


class Contruction:
    def __init__(self, api_result: Any):
        self.domains: List[Domain] = [
            Domain(d) for d in api_result.get('domains') or []]
        self.examples: List[Example] = [
            Example(e) for e in api_result.get('examples') or []]
        self.notes: List[CategorizedText] = [
            CategorizedText(n) for n in api_result.get('notes') or []]
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('Regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]
        self.text: str = api_result.get('text')
