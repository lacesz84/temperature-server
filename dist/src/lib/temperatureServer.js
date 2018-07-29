"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const temperatureReader_1 = require("./temperatureReader");
const temperatureLogger_1 = require("./temperatureLogger");
class TemperatureServer {
    constructor() {
        this.app = express();
        this.tempReader = new temperatureReader_1.temperatureReader();
        this.temperatureLogger = new temperatureLogger_1.temperatureLogger();
    }
    start() {
        this.temperatureLogger.createTable();
        this.temperatureLogger.startLogging();
        this.app.get('/', (req, res) => {
            const currentTemperature = this.tempReader.getCurrentTemperature();
            res.send(currentTemperature);
        });
        const port = this.getPort();
        this.app.listen(port, () => {
            process.stdout.write(`Temperature server started on localhost:${port}...\n`);
        });
    }
    getPort() {
        return process.env.PORT || 3100;
    }
}
exports.TemperatureServer = TemperatureServer;
//# sourceMappingURL=temperatureServer.js.map