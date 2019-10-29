from typing import List
from .synonym_antonym import SynonymAntonym
from oxford_api.models.common.domain import Domain
from oxford_api.models.common.example import Example
from oxford_api.models.common.region import Region
from oxford_api.models.common.register import Register


class ThesaurusSense:
    def __init__(self, api_result):
        self.antonyms: List[SynonymAntonym] = [
            SynonymAntonym(a) for a in api_result.get('antonyms') or []]
        self.domains: List[Domain] = [
            Domain(d) for d in api_result.get('domains') or []]
        self.examples: List[Example] = [
            Example(e) for e in api_result.get('examples') or []]
        self.id: str = api_result.get('id')
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]
        self.subsenses: List[ThesaurusSense] = [
            ThesaurusSense(s) for s in api_result.get('subsenses') or []]
        self.synonyms: List[SynonymAntonym] = [
            SynonymAntonym(s) for s in api_result.get('synonyms') or []]
