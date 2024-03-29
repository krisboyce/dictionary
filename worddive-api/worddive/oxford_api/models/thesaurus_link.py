from typing import List, Any


class ThesaurusLink:
    def __init__(self, api_result: Any):
        self.entry_id: str = api_result.get('entry_id')
        self.sense_id: str = api_result.get('sense_id')
