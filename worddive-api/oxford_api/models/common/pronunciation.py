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
