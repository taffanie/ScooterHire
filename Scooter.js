const ChargingStation = require("./ChargingStation")

class Scooter {
    constructor(id){
        this.id = id
        this.charged = false 
    }
}

module.exports = Scooter 