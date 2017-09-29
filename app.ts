import * as express from 'express';
import { temperatureReader } from './temperatureReader';

const tempReader = new temperatureReader();
const app = express();

app.get('/', function (req, res) {
    const currentTemperature = tempReader.getCurrentTemperature();
    res.send(currentTemperature)
});

app.listen(3000, function () {
    process.stdout.write('Temperature server started...');
});