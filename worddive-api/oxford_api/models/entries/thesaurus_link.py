

class ThesaurusLink:
    def __init__(self, api_result):
        self.entry_id: str = api_result.get('entry_id')
        self.sense_id: str = api_result.get('sense_id')
