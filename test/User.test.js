const User = require('../src/User')
const Scooter = require('../src/Scooter');

const testUser = new User('Jeff', 100);
const testUser2 = new User('Stan', 100);
testUser.age = 19
testUser2.age = 17

describe('User Object', () => {

    test('user has payment account', () => {
        expect(testUser.account).toEqual(100)
        console.log(testUser.age)
    })

    test('renting Scooter charges account', () => {
        testUser.rentScooter()
        expect(testUser.account).toEqual(80)
    })

    test('check for age before renting scooter', () => {
        expect(testUser.rentScooter()).toBe("Enjoy your ride")
        expect(testUser2.rentScooter()).toBe("You have to be 18+ to use a scooter")
    })

    test('expect age to be undefined until user states age', () => {
        const testUser3 = new User('Stan', 100);
        expect(testUser3.age).not.toBeDefined()
    })

    test('returning scooter removes scooter from user account', () => {
        const testScooter = new Scooter('Palo Alto', true);
        testUser.rentScooter(testScooter)
        testUser.returnScooter(testScooter)
        expect(testUser.scooter).toStrictEqual({})
    })
})