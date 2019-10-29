from typing import List
from oxford_api.oxford_api_client import OxfordApiService
from oxford_api.models.thesaurus.thesaurus import Thesaurus
from oxford_api.models.thesaurus.headword_thesaurus import HeadwordThesaurus
from oxford_api.models.thesaurus.thesaurus_lexical_entry import ThesaurusLexicalEntry
from oxford_api.models.thesaurus.thesaurus_entry import ThesaurusEntry
from oxford_api.models.thesaurus.thesaurus_sense import ThesaurusSense
from oxford_api.models.thesaurus.synonym_antonym import SynonymAntonym

from worddive.models.word import Word


class WordService:
    def __init__(self, api_id, api_key):
        self._dictionary = OxfordApiService(api_id, api_key)

    def get_word(self, word) -> List[Word]:
        headwords = self._dictionary.entries(word).results
        thesaurus = self._dictionary.thesaurus(word).results
        words: List[Word] = [Word(headword) for headword in headwords]
        thesaurus_senses = [
            sense for headword in thesaurus for sense in self._get_thesaurus_senses(headword)]

        for word in words:
            for sense in word.senses:
                for sense_id in sense.thesaurus_sense_ids or []:
                    t_senses = [
                        t for t in thesaurus_senses if t.id == sense_id]
                    sense.synonyms += [s.id
                                        for t in t_senses 
                                            for syn in t.synonyms 
                                                for subsense in t.subsenses 
                                                    for s in [syn] + subsense.synonyms 
                                                        if s.id]
                sense.synonyms = list(set(sense.synonyms))

        return words

    def _get_thesaurus_senses(self, headword: HeadwordThesaurus) -> List[ThesaurusSense]:
        return [base_sense
                for lex_entry in headword.lexical_entries
                for entry in lex_entry.entries
                for base_sense in entry.senses]
