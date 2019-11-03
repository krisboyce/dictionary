

class Inflection:
    def __init__(self, api_result):
        self.id: str = api_result.get('id')
        self.text: str = api_result.get('text')