const User = require('../src/User')
const Scooter = require('../src/Scooter')
const ScooterLocation = require('../src/ScooterLocation')

const KingCounty = new ScooterLocation('King County')
stations = ['Shoreline', 'Lynwood', 'Redmond', 'Everett']
KingCounty.allStations.push(...stations)

describe('Scooter Location Object Properties', () => {
    test('Scooter has city object', () => {
        expect(KingCounty.city).toBe('King County')
    })
})

describe('Scooter Location Object methods', () => {
    KingCounty.addStation('Seattle')
    test('Adding a station to list', () => {
        expect(KingCounty.allStations).toEqual(expect.arrayContaining(['Seattle']))
    })
})