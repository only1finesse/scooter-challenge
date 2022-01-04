class Scooter {
    constructor(station, charged) {
        this.station = station;
        this.charged = charged;
        this.broken = false;
    }

    returnScooter(station) {
        this.station = station;
        return this.scooter
    }

    rent() {
        if (this.charged && this.broken == false) { //Equivalent to: if(this.charged == true)
            this.station = ''       //Scooter does not have a station since it is rented
            return 'Enjoy your ride!';
        } else if (!this.charged && this.broken == false) {
            return 'Scooter is not charged, please select another';
        } else {
            return 'Scooter is broken';
        }
    }

    markBroken() {
        this.broken = true;
        return "This Scooter is broken, please select a new one from station";
    }

    async charge() {
        if (this.charged == false) {
            console.log('Starting charge');
            await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
            this.charged = true;
            return 'Charge complete';
        } else {
            return 'This scooter is fully charged'
        }
    }
}

module.exports = Scooter