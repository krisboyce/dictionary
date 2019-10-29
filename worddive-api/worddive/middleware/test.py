

class TestMiddleware:
    def __init__(self, app):
        self.app = app
    
    def __call__(self, environment, start_response):
        self.app(environment, start_response)