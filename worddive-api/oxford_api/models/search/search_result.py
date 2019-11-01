

class SearchResult:
    def __init__(self, api_result):
        self.id = api_result.get('id')
        self.match_string = api_result.get('matchString')
        self.match_type = api_result.get('matchType')
        self.region = api_result.get('region')
        self.word = api_result.get('word')