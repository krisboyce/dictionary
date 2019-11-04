from typing import List
from .oxford_api.models.sense import Sense
from .oxford_api.models.lexical_entry import LexicalEntry


class WordSense():
    def __init__(self, lexical_entry: LexicalEntry, sense: Sense, parent_sense: Sense=None):
        print(lexical_entry)
        
        self.sense_id = sense.id
        self.parent_id = parent_sense.id if parent_sense else None
        self.lexical_category: str = lexical_entry.lexical_category.text if lexical_entry.lexical_category else None
        self.definitions: List[str] = sense.definitions or []
        self.examples: List[str] = [e.text for e in sense.examples]
        self.thesaurus_sense_ids: List[str] = [link.sense_id for link in sense.thesaurus_links]
        self.cross_references: List = sense.cross_references
        self.derivatives: List = lexical_entry.derivatives
        self.derivative_of: List = lexical_entry.derivative_of
        self.domains: List[str] = [d.text for d in sense.domains]
        self.synonyms: List[str] = []
        self.antonyms: List[str] = []