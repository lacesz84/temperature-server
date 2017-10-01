"use strict";
const dateFormat = require('dateformat');
class Cache {
    constructor() {
        this.cachedTemperature = {
            time: null,
            value: null
        };
    }
    getTemperature() {
        const cacheTime = this.getCacheTime();
        if (this.cachedTemperature.time === cacheTime) {
            return this.cachedTemperature.value;
        }
        else {
            return null;
        }
    }
    getCacheTime() {
        return dateFormat(new Date(), 'yyyy-mm-dd hh:MM');
    }
    setTemperature(currentTemperature) {
        const cacheTime = this.getCacheTime();
        this.cachedTemperature = {
            time: cacheTime,
            value: currentTemperature
        };
    }
}
exports.Cache = Cache;
//# sourceMappingURL=Cache.js.map