from typing import List
from .oxford_api.models.sense import Sense

class WordSense():
    def __init__(self, category: str, sense: Sense, parent_sense: Sense=None):
        self.sense_id = sense.id
        self.parent_id = parent_sense.id if parent_sense else None
        self.lexical_category: str = category
        self.definitions: List[str] = sense.definitions or []
        self.examples: List[str] = [e.text for e in sense.examples]
        self.thesaurus_sense_ids: List[str] = [link.sense_id for link in sense.thesaurus_links]
        self.domains: List[str] = [d.text for d in sense.domains]
        self.synonyms: List[str] = []
        self.antonyms: List[str] = []
        self.cross_references: List[str] = []