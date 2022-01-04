const { expect, test } = require('@jest/globals');
const Scooter = require('../src/Scooter');
const User = require('../src/User');

const testUser = new User('Tom', 20)
const testScooter1 = new Scooter('Brooklyn', true);
const testScooter2 = new Scooter('Brooklyn', false);
const testScooter3 = new Scooter('Seattle', false);

describe('Scooter Object Properties', () => {

    test('Scooter is an object, with a location', () => {

        expect(typeof testScooter1).toBe('object');
        expect(testScooter1.station).toBe('Brooklyn');
    })
})

describe('Scooter Object Methods', () => {

    test('charged scooter can be rented', () => {
        expect(testScooter1.rent()).toBe('Enjoy your ride!');
        expect(testScooter1.station).toBe('')
    })

    test('scooter with no charge cannot be rented', () => {
        expect(testScooter2.rent()).toBe('Scooter is not charged, please select another');
    })

    test('scooter broken should be registered as broken & cannot be rented', () => {
        testScooter3.markBroken()
        expect(testScooter3.broken).toBe(true);
        expect(testScooter3.rent()).toBe('Scooter is broken')
    })

    test("charge", async () => {
        await testScooter3.charge(); // we need to wait for the charge!
        console.log("Test complete");
      });

    test('scooter battery should charge when prompted', () => {
        testScooter3.charge()
        expect(testScooter3.charged).toBeTruthy;
    })

    test('scooter station is changed after return to different station', () => {
        testScooter1.rent()
        // console.log(testScooter1.station)
        testScooter1.returnScooter('Redmond')
        // console.log(testScooter1.station)
        expect(testScooter1.station).toBe('Redmond')
    })

})
