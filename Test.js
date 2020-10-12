const User = require('./User')
const Scooter = require('./Scooter')
const ChargingStation = require('./ChargingStation')

const user1 = new User("Michael")
const scooter1 = new Scooter("1")
const chargingstation1 = new ChargingStation(scooter1)

// user1.hireScooter(changingStation1)
console.log("Hello")
chargingstation1.charge(scooter1)