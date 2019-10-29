from typing import List
from .domain import Domain
from .categorized_text import CategorizedText
from .region import Region
from .register import Register


class Example:
    def __init__(self, api_result):
        self.definitions: List[str] = api_result.get('definitions')
        self.domains: List[Domain] = [
            Domain(d) for d in api_result.get('domains') or []]
        self.notes: List[CategorizedText] = [
            CategorizedText(n) for n in api_result.get('notes') or []]
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]
        self.sense_ids: List[str] = api_result.get('senseIds')
        self.text: str = api_result.get('text')
