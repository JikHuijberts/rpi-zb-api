import re


def is_valid_mac(x):
    return not(re.match("[0-9a-f]{2}([-:]?)[0-9a-f]{2}(\\1[0-9a-f]{2}){4}$", x.lower()))


def mac(x):
    if not(is_valid_mac(x)):
        raise ValueError("Invalid mac {} given.".format(x))
    return x

def valid_email(x):


def validate_user(x):
