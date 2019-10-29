from typing import List
from oxford_api.models.entries.sense import Sense

class WordSense():
    def __init__(self, category: str, sense: Sense, parent_sense: Sense=None):
        self.sense_id = sense.id
        self.parent_id = parent_sense.id if parent_sense else None
        self.lexicalCategory: str = category
        self.definitions: List[str] = sense.definitions or []
        self.examples: List[str] = [e.text for e in sense.examples]
        self.thesaurus_sense_ids: List[str] = [link.sense_id for link in sense.thesaurus_links]
        self.synonyms: List[str] = []
        self.antonyms: List[str] = []
        self.cross_references: List[str] = []