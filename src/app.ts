import { TemperatureServer } from './lib/temperatureServer';

require('dotenv').config();

const server = new TemperatureServer();
server.start();