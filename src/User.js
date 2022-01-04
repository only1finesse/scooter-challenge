const Scooter = require('../src/Scooter');

class User {
	constructor(name, dollars){
		this.name = name
		this.account = dollars
		this.scooter = {}
        this.age 
        this.city
	}

	rentScooter(scooter){
        if ( this.age >= 18 ) {
            this.account = this.account - 20;
            this.scooter = scooter
            return "Enjoy your ride"
        } else {
            return "You have to be 18+ to use a scooter"
        }
	}

    returnScooter(scooter) {
        this.scooter = {}
    }

    

    // ride(scooter){
    //     if 
    // }
}


module.exports = User