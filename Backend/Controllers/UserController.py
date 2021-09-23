from flask_restx import Resource
from flask import request
from Backend.Dto.UserDto import UserDto
from Backend.Dto.UserDto import AuthDto
user_ns = UserDto.api
auth_ns = AuthDto.api

@user_ns.route('/')
class Users(Resource):
    def get(self):
        return {'hello': 'world'}
    @user_ns.response(201, {"user", "validated"})
    @user_ns.doc('User validation an creation')
    def post(self, ):
        args = request.get_json()
        if is_valid_user():
            return


@auth_ns.route('/')
class UserLogin(Resource):

    @user_ns.doc('User login')
    def post(self):
        username = request.values.get("email")
        password = request.values.get("password")
        # TODO user validation
        print(username, password)
