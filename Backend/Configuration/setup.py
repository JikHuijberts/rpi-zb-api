from flask import Flask
from flask_restx import Api
from Backend.Controllers.DeviceController import device_ns
from Backend.Controllers.UserController import user_ns
from Backend.Models.models import db, Device, UserModel

def create_app():
    USERNAME = "postgres"
    PASSWORD = 'admin'
    URI = f'postgresql+psycopg2://{USERNAME}:{PASSWORD}@localhost:5432/psc'
    x = Flask(__name__)
    x.config['SQLALCHEMY_DATABASE_URI'] = URI
    db.init_app(x)
    return x


def load_blueprints():
    api.add_namespace(device_ns, path="/devices")
    api.add_namespace(user_ns, path="/users")
    return api


def setup_database(x):
    with x.app_context():
        db.create_all()


if __name__ == '__main__':
    app = create_app()
    api = Api(app)
    load_blueprints()
    setup_database(app)
    app.run(debug=True)
