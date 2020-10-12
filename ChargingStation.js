class ChargingStation {
    constructor(scooter){
        this.scooter = scooter
    }

    hasScooter(){
        if (this.scooter = null){
            return false 
        } else {
            return true 
        }
    }
    undockScooterTo(user){
        if (this.scooter.charged) {
            user.scooter = this.scooter 
            this.scooter = null 
        } else {
            console.log("This bike is not fully charged")
        }        
    }
    dockScooter(user){
        this.scooter = user.scooter 
        user.scooter = null 
    }
    charge(scooter){
        setTimeout(()=>{
            scooter.charged = true 
            console.log('Fully charged')
        }, 2000)
    }
}

module.exports = ChargingStation