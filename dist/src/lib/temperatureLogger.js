"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
const temperatureReader_1 = require("./temperatureReader");
class temperatureLogger {
    constructor() {
        this.db = new sqlite3_1.Database('temperature.db');
        this.tempReader = new temperatureReader_1.temperatureReader();
    }
    createTable() {
        this.db.exec('create table if not exists temperature_log (`created_at` datetime, temperature varchar(6));');
    }
    insert(temperature) {
        this.db.run('INSERT INTO `temperature_log` VALUES(DATETIME(), ?)', [temperature]);
    }
    startLogging() {
        setInterval(() => {
            const temperature = this.tempReader.getCurrentTemperature();
            this.insert(temperature);
        }, 1000 * 60);
    }
}
exports.temperatureLogger = temperatureLogger;
//# sourceMappingURL=temperatureLogger.js.map