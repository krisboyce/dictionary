from typing import List, Any
from oxford_api.oxford_api_client import OxfordApiService
from oxford_api.models.thesaurus.thesaurus import Thesaurus
from oxford_api.models.thesaurus.headword_thesaurus import HeadwordThesaurus
from oxford_api.models.thesaurus.thesaurus_lexical_entry import ThesaurusLexicalEntry
from oxford_api.models.thesaurus.thesaurus_entry import ThesaurusEntry
from oxford_api.models.thesaurus.thesaurus_sense import ThesaurusSense
from oxford_api.models.thesaurus.synonym_antonym import SynonymAntonym
from oxford_api.models.search.search_result import SearchResult
from worddive.models.word import Word
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import re

class WordService:
    def __init__(self):
        self._dictionary = OxfordApiService()

    def _get_thesaurus_senses(self, headword: HeadwordThesaurus) -> List[ThesaurusSense]:
        return [base_sense
                for lex_entry in headword.lexical_entries
                for entry in lex_entry.entries
                for base_sense in entry.senses]

    def search(self, query) -> List[SearchResult]:
        return self._dictionary.search(query, 'en-us').results

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

                    sense.synonyms += [(s.id, s.text)
                                       for t in t_senses
                                       for syn in t.synonyms
                                       for subsense in t.subsenses
                                       for s in [syn] + subsense.synonyms
                                       if s.id]

                    sense.antonyms += [(a.id, a.text)
                                       for t in t_senses
                                       for ant in t.antonyms
                                       for subsense in t.subsenses
                                       for a in [ant] + subsense.antonyms
                                       if a.id]

                sense.synonyms = list(set(sense.synonyms))
                sense.antonyms = list(set(sense.antonyms))

        return words

    def get_lemma(self, text: str) -> Any:
        client = language.LanguageServiceClient()
        document = types.Document(
            content=text,
            type=enums.Document.Type.PLAIN_TEXT)
        response = client.annotate_text(
            document=document,
            features={
                'extract_syntax': True
            },
            encoding_type='UTF32',
        )

        for token in response.tokens:
            print(token.part_of_speech.tag)

        return [(token.text.content, token.text.begin_offset, token.lemma if re.match('[a-zA-Z]+', token.lemma) else None) for token in response.tokens]
