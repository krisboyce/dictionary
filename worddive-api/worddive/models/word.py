from typing import List
from oxford_api.models.entries.lexical_entry import LexicalEntry
from oxford_api.models.entries.entry import Entry
from oxford_api.models.entries.sense import Sense
from oxford_api.models.entries.headword_entry import HeadwordEntry
from oxford_api.models.common.pronunciation import Pronunciation
from .word_sense import WordSense


class Word:
    def __init__(self, headword: HeadwordEntry):
        self.word_id: str = headword.id
        self.display_text: str = headword.word
        self.etymologies: List[str] = [e 
            for lex in headword.lexical_entries
                for entry in lex.entries
                    for e in entry.etymologies or []]

        self.pronunciations: List[Pronunciation] = [p for p in headword.pronunciations]
        self.pronunciations += [p
            for lex_entry in headword.lexical_entries
                for p in lex_entry.pronunciations]

        self.pronunciations += [p
            for lex_entry in headword.lexical_entries
                for entry in lex_entry.entries
                    for p in entry.pronunciations]

        self.pronunciations += [p
            for lex_entry in headword.lexical_entries
                for entry in lex_entry.entries
                    for sense in entry.senses
                        for p in sense.pronunciations]

        self.pronunciations += [p
            for lex_entry in headword.lexical_entries
                for entry in lex_entry.entries
                    for sense in entry.senses
                        for subsense in sense.subsenses
                        for p in subsense.pronunciations]

        self.pronunciations = list(set(self.pronunciations))

        self.senses: List[WordSense] = [sense
            for lex_entry in headword.lexical_entries
                for entry in lex_entry.entries
                    for base_sense in entry.senses
                            for sense in 
                                [WordSense(lex_entry.lexical_category.text, base_sense)] 
                                + list(map(lambda x: WordSense(lex_entry.lexical_category.text, x, base_sense), base_sense.subsenses))]

        self.cross_references: List[str] = []