"use strict";
const fs = require('fs');
const defaultFileName = '/sys/bus/w1/devices/28-0115a83cebff/w1_slave';
class temperatureReader {
    constructor() {
        const fileName = this.getFileName();
        if (!fs.existsSync(fileName)) {
            console.error('Temperature file not found: ' + fileName);
            process.exit();
        }
    }
    getCurrentTemperature() {
        const fileContents = this.readFile();
        const currentTemperature = this.getTemperatureFromFileContents(fileContents);
        return currentTemperature;
    }
    getFileName() {
        return process.env.FILENAME || defaultFileName;
    }
    readFile() {
        const fileName = this.getFileName();
        const buffer = fs.readFileSync(fileName);
        return buffer.toString();
    }
    getTemperatureFromFileContents(fileContents) {
        const match = fileContents.match(/t=(.*)/);
        const temperature = parseInt(match[1]) / Math.pow(10, 3);
        return temperature.toString();
    }
}
exports.temperatureReader = temperatureReader;
//# sourceMappingURL=temperatureReader.js.map