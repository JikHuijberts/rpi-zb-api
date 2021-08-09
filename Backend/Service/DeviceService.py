from sqlalchemy.exc import SQLAlchemyError


class DeviceService:
    def __init__(self):
        return

    def save_device(self, dev):
        from Backend.Models.models import Device
        from Backend.Configuration.setup import db
        try:
            device = Device(mac=dev['mac'], ip=dev['ip'])
            db.session.add(device)
            db.session.commit()
        except SQLAlchemyError as e:
            error = str(e.__dict__['orig'])
            return None, error
        return device

