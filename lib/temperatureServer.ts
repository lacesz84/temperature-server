import * as express from 'express';
import { temperatureReader } from './temperatureReader';

class TemperatureServer {

    private app;
    private tempReader;
    
    constructor() {
        this.app = express();
        this.tempReader = new temperatureReader();
    }
    
    public start() {
        this.app.get('/', function (req, res) {
            const currentTemperature = this.tempReader.getCurrentTemperature();
            res.send(currentTemperature)
        });

        const port = this.getPort();
        this.app.listen(port, function () {
            process.stdout.write('Temperature server started...');
        });
    }

    private getPort() {
        return process.env.PORT || 3100;
    }
    
}

export { TemperatureServer }