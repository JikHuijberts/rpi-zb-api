from flask_restx import Namespace, fields

class DeviceDto:
    api = Namespace('device', description="dto for device")
    device = api.model('device', {
        'mac': fields.String(required=True, description="Device mac adress"),
        'ip': fields.String(description='Ip adress of the device')
    })
