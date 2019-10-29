from typing import List, Any


class CrossReference:
    def __init__(self, api_result: Any):
        self.id: str = api_result.get('id')
        self.text: str = api_result.get('text')
        self.type_: str = api_result.get('type')
