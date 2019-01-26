# This is a simple Publish/Subscribe example using NodeJS and [Socket.IO](https://socket.io)

This is an example project using [Socket.IO](https://socket.io) to mimic an MQTT style publish and subscribe model.  It currently uses the [Socket.IO](https://socket.io)'s default namespace and Rooms to facilitate the publish subscribe feature.  Each client joins (or subscribes) to specific rooms (topics).  These topics can either be a specific device ID or a general topic like 'temperature' or 'wind-speed'.

## Client
In the client directory there is a config.json that is used to set some default parameters for the NodeJS client. 

- ID: is used as the unique or devices specific ID for system.  It can also be used for the 'topic' if you want to have multiple devices publishing to the same topic (or room).
- INTERVAL: is the time in milliseconds that you would like to publish a new update
- SUBSCRIBE_TO: is a list of IDs or topics that you would like to receive updates on.

## To Run
Clone the git repo:
```bash
git clone https://github.com/nickheartrobots/Socket.IO-Pub-Sub.git
```

To install the dependencies run:
```bash
npm install
```

To build the project for the first time run:
```bash
npm run build
```
Or to build it after the first time:
```bash
npm run rebuild
```

To configure the dev environment add a .env file to the Client directory and in it put "IS_DEV = true"

```bash
Socket.IO-Pub-Sub/
├── Broker/
|   ├── bin/
|   ├── src/
|       ├── index.js
├── Client/
    ├── bin/
    ├── src/
    |   ├── index.js
    ├── config.json
    ├── .env
```

Then to run the dev client run:
```bash
npm run dev
```
