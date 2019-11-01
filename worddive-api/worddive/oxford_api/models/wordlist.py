from .search_result import SearchResult


class Wordlist:
    def __init__(self, api_result):
        self.metadata = api_result.get('metadata')
        self.results = [SearchResult(r) for r in api_result.get('results') or []]