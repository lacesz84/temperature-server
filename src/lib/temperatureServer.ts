import * as express from 'express';
import { temperatureReader } from './temperatureReader';
import { temperatureLogger } from "./temperatureLogger";

class TemperatureServer {

    private app;
    private tempReader:temperatureReader;
    private temperatureLogger:temperatureLogger;
    
    constructor() {
        this.app = express();
        this.tempReader = new temperatureReader();
        this.temperatureLogger = new temperatureLogger();
    }
    
    public start() {
        this.temperatureLogger.createTable();
        this.temperatureLogger.startLogging();

        this.app.get('/', (req, res) => {
            const currentTemperature = this.tempReader.getCurrentTemperature();
            res.send(currentTemperature)
        });

        const port = this.getPort();
        this.app.listen(port, () => {
            process.stdout.write(`Temperature server started on localhost:${port}...\n`);
        });
    }

    private getPort() {
        return process.env.PORT || 3100;
    }
    
}

export { TemperatureServer }