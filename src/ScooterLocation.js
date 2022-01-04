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
        resultIndex = this.allStations.find(station)
        if (resultIndex) {
            return resultIndex
        } else {
            return "This station does not exist"
        }
    }



}

module.exports = ScooterLocation