import re
from password_validator import PasswordValidator

def is_valid_mac(x):
    return not(re.match("[0-9a-f]{2}([-:]?)[0-9a-f]{2}(\\1[0-9a-f]{2}){4}$", x.lower()))


def mac(x):
    if not(is_valid_mac(x)):
        raise ValueError("Invalid mac {} given.".format(x))
    return x


def valid_email(x):
    return not(re.match("(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", x.lower()))


def valid_password(x):
    schema = PasswordValidator()
    schema\
        .min(8)\
        .max(255)\
        .has().uppercase()\
        .has().lowercase()\
        .has().digits()\
        .has().symbols()
    return schema.validate(str(x))


def validate_user(x):
    if not(valid_email(x.email)):
        raise ValueError("Invalid email {} given.".format(x.email))
    if not(valid_password(x.password)):
        raise ValueError("Invalid password given")
    return x
