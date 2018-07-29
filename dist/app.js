"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const temperatureServer_1 = require("./lib/temperatureServer");
require('dotenv').config();
const server = new temperatureServer_1.TemperatureServer();
server.start();
//# sourceMappingURL=app.js.map