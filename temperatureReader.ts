import * as fs from 'fs';

const fileName = '/sys/bus/w1/devices/28-0115a83cebff/w1_slave';

class temperatureReader {
    
    public constructor() {
        if (!fs.existsSync(fileName)) {
            console.error('Temperature file not found: ' + fileName);
            process.exit();
        }
    }
    
    public getCurrentTemperature() {
        const fileContents = this.readFile();
        const currentTemperature = this.getTemperatureFromFileContents(fileContents);
        
        return currentTemperature;
    }
    
    private readFile() {
        const buffer = fs.readFileSync(fileName);
        
        return buffer.toString();
    }

    private getTemperatureFromFileContents(fileContents:string) {
        const match = fileContents.match(/t=(.*)/);
        const temperature = parseInt(match[1]) / Math.pow(10, 3);
        
        return temperature.toString();
    }
    
}

export { temperatureReader };