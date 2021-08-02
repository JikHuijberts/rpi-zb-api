import paho.mqtt.client as mqtt

BROKER = "localhost"
PORT = "1883"
TOPIC = "zigbee2mqtt"


def on_connect(client, userdata, flags, rc):
    print("Connected to server")
    client.subscribe(TOPIC)


def on_message(client, userdata, msg):
    print("New Message: ")
    print(msg.topic + " " + str(msg.payload))


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.loop_forever()