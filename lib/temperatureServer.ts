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

        this.app.listen(3000, function () {
            process.stdout.write('Temperature server started...');
        });
    }
    
}

export { TemperatureServer }