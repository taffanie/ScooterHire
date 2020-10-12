class User {
    constructor(name){
        this.name = name 
        this.scooter = null  
    }
    hireScooter(chargingStation){
        chargingStation.undockScooterTo(this)
    }
    hasScooter(){
        if (this.scooter === null){
            return false 
        } else {
            return true 
        }
    }
    ridesScooter(){
        if (this.hasScooter()){
            this.scooter.charged = false
        }
    }
}

module.exports = User