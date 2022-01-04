const { thistle } = require('color-name');
const Scooter = require('../src/Scooter');

class ScooterLocation {
    constructor(city) {
        this.city = city
        this.allStations = []
    }

    addStation(station) {
        this.allStations.push(station)
    }

    findStation(station) {
        const result = this.allStations.find( element => element === station)
        if ( result === undefined ) {
            return "This station does not exist"
        } else {
            return result
        }
    }

}

module.exports = ScooterLocation