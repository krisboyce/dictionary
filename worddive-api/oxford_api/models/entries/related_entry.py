from typing import List
from oxford_api.models.common.domain import Domain
from oxford_api.models.common.region import Region
from oxford_api.models.common.register import Register


class RelatedEntry:
    def __init__(self, api_result):
        self.id: str = api_result.get('id')
        self.domains: List[Domain] = [
            Domain(d) for d in api_result.get('domains') or []]
        self.language: str = api_result.get('language')
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]
        self.text: str = api_result.get('text')
