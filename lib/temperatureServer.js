"use strict";
const express = require('express');
const temperatureReader_1 = require('./temperatureReader');
class TemperatureServer {
    constructor() {
        this.app = express();
        this.tempReader = new temperatureReader_1.temperatureReader();
    }
    start() {
        this.app.get('/', function (req, res) {
            const currentTemperature = this.tempReader.getCurrentTemperature();
            res.send(currentTemperature);
        });
        const port = this.getPort();
        this.app.listen(port, function () {
            process.stdout.write('Temperature server started...');
        });
    }
    getPort() {
        return process.env.PORT || 3100;
    }
}
exports.TemperatureServer = TemperatureServer;
//# sourceMappingURL=temperatureServer.js.map