import bcrypt
from sqlalchemy.orm import validates
import socket
from Backend.Validators.ValueValidators import is_valid_mac
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Device(db.Model):
    __tablename__ = 'device'
    id = db.Column(db.Integer, primary_key=True)
    mac = db.Column(db.String(18), unique=True, nullable=False)
    ip = db.Column(db.String(50), nullable=True)

    def __int__(self, mac, ip):
        self.mac = mac
        self.ip = ip

    @validates('mac')
    def validate_mac(self, key, value):
        if not is_valid_mac(value):
            AssertionError("Invalid mac adress")
        return value

    @validates('ip')
    def validate_ip(self, key, value):
        if value != '':
            try:
                socket.inet_aton(value)
                return value
            except socket.error:
                return AssertionError(f"The given ip {value} is not valid")
        return value


class UserModel(db.Model):
    __tablename__ = "profile"
    id = db.Column('user_id', db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    infix = db.Column(db.String(255))
    last_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def __init__(self, first_name, infix, last_name, email, password):
        self.first_name = first_name
        self.infix = infix
        self.last_name = last_name
        self.email = email
        self.password = password

    @property
    def password(self):
        raise AttributeError('password not readable')

    @password.setter
    def password(self, password):
        self.password_hash = bcrypt.hashpw(password, bcrypt.gensalt(12))
