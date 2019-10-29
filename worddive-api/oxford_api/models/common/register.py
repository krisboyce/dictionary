from typing import List, Any


class Register:
    def __init__(self, api_result: Any):
        self.id_ = api_result.get('id')
        self.text = api_result.get('text')
