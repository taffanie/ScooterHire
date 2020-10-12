const User = require('./User')
const Scooter = require('./Scooter')
const ChargingStation = require('./ChargingStation')
const { describe, expect } = require('@jest/globals')

const user1 = new User("Michael")
const scooter1 = new Scooter("1")
const chargingstation1 = new ChargingStation(scooter1)

// User story: Michael hires a scooter from a charging station, then returns the scooter & it is charged

describe('Scooter Hire', () => {
    test('user can hire a scooter from a charging station', () => {
        user1.hireScooter(chargingstation1)
        expect(user1.scooter).toBeTruthy
        expect(chargingstation1.scooter).toBeFalsy
    });
    test('when user rides a scooter, it depletes the battery', () => {
        user1.ridesScooter()
        expect(scooter1.charged).toBeFalsy 
    });
    test('user can return their scooter to a charging station', () => {
        chargingstation1.dockScooter(user1)
        expect(chargingstation1.scooter).toBeTruthy
        expect(user1.scooter).toBeFalsy
    });
    test('scooter can be charged', () => {
        chargingstation1.charge(scooter1)
        expect(scooter1.charged).toBeTruthy
    });
    // test('scooter takes 2000 milliseconds to be charged', () => {
        
    // });
});

// user1.hireScooter(changingStation1)
// console.log("Hello")
// chargingstation1.charge(scooter1)