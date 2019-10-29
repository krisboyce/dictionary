

class CategorizedText:
    def __init__(self, api_result):
        self.id_ = api_result.get('id')
        self.text = api_result.get('text')
        self.type_ = api_result.get('type')
