from typing import List, Any
from .region import Region
from .register import Register


class Pronunciation:
    def __init__(self, api_result: Any):
        self.audio_file_uri: str = api_result.get('audioFile')
        self.dialects: List[str] = api_result.get('dialects')
        self.phonetic_notation: str = api_result.get('phoneticNotation')
        self.phonetic_spelling: str = api_result.get('phoneticSpelling')
        self.regions: List[Region] = [
            Region(r) for r in api_result.get('regions') or []]
        self.registers: List[Register] = [
            Register(r) for r in api_result.get('registers') or []]

    def __eq__(self, other):
        return self.audio_file_uri == other.audio_file_uri\
        and self.phonetic_notation == other.phonetic_notation\
        and self.phonetic_spelling == other.phonetic_spelling
    
    def __hash__(self):
        return hash((self.audio_file_uri, self.phonetic_notation, self.phonetic_spelling))
