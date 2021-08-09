import logging

from flask import request
from flask_restx import Resource
from Backend.Validators.ValueValidators import is_valid_mac
from Backend.Dto.DeviceDto import DeviceDto
from Backend.Service.DeviceService import DeviceService

device_ns = DeviceDto.api
_device = DeviceDto.device
service = DeviceService()


@device_ns.route("/add")
class AddDevice(Resource):

    @device_ns.response(201, {'device {mac}': 'Created'})
    @device_ns.doc('Creation and validation of device')
    @device_ns.expect(_device)
    def post(self):
        args = request.get_json()
        if is_valid_mac(args['mac']):
            return device_ns.abort(400, message=f'the mac adress \"{args["mac"]}\" is invalid.')
        args['ip'] = request.remote_addr
        device, e = service.save_device(dev=args)
        if device is None:
            device_ns.logger.error(e)
            return device_ns.abort(502, "Could not save the device")
        return {f'device {args["mac"]}': 'Created'}, 201
