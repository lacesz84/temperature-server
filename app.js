"use strict";
const express = require('express');
const temperatureReader_1 = require('./temperatureReader');
const tempReader = new temperatureReader_1.temperatureReader();
const app = express();
app.get('/', function (req, res) {
    const currentTemperature = tempReader.getCurrentTemperature();
    res.send(currentTemperature);
});
app.listen(3000, function () {
    process.stdout.write('Temperature server started...');
});
//# sourceMappingURL=app.js.map