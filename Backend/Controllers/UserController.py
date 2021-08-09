from flask_restx import Namespace, Resource

user_ns = Namespace("devices", description="Handles requests from the raspberry pi's")


@user_ns.route('')
class Users(Resource):
    def get(self):
        return {'hello': 'world'}
