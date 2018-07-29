const dateFormat = require('dateformat');

interface ICachedTemperature {
    time: string|null,
    value: string|null
}

class Cache {

    private cachedTemperature:ICachedTemperature = {
        time: null,
        value: null
    };
    
    getTemperature() {
        const cacheTime = this.getCacheTime();
        if (this.cachedTemperature.time === cacheTime) {
            return this.cachedTemperature.value;
        } else {
            return null;
        }
    }

    private getCacheTime() {
        return dateFormat(new Date(), 'yyyy-mm-dd hh:MM');
    }

    setTemperature(currentTemperature: string) {
        const cacheTime = this.getCacheTime();
        this.cachedTemperature = {
            time: cacheTime,
            value: currentTemperature
        }
    }
}

export { Cache }