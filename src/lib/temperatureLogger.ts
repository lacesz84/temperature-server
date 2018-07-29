import {Database} from "sqlite3";
import {temperatureReader} from "./temperatureReader";

class temperatureLogger {

    private db:Database;
    private tempReader:temperatureReader;

    constructor() {
        this.db = new Database('temperature.db');
        this.tempReader = new temperatureReader();
    }

    public createTable() {
        this.db.exec('create table if not exists temperature_log (`created_at` datetime, temperature varchar(6));');
    }

    public insert(temperature:string) {
        this.db.run('INSERT INTO `temperature_log` VALUES(DATETIME(), ?)', [temperature]);
    }

    startLogging() {
        setInterval(() => {
            const temperature = this.tempReader.getCurrentTemperature();
            this.insert(temperature);
        }, 1000 * 60);
    }
}

export { temperatureLogger }