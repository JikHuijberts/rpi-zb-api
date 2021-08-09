from Backend.Dto.UserDto import User


class UserService:
    def get_user(self, id):
        return
    def save_user(self, UserDto):
        UserDto[""]
        user = User(UserDto["first_name"] + ' ' + UserDto["last_name"])
        return user