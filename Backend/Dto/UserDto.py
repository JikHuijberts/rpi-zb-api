from flask_restx import Namespace, fields




class UserDto:
    api = Namespace('user', description="Dto for user registration")
    user = api.model('user', {
        'first_name': fields.String(required=True, description="First name", nullable="False"),
        'last_name': fields.String(required=True),
        'infix': fields.String(),
        'email': fields.String(required=True,),
        'password': fields.String(),

    })
class AuthDto:
    api = Namespace("auth", description="Authentication")
    user_auth = api.model('auth_details', {
        'email': fields.String(required=True),
        'password': fields.String(required=True)
    })