                                    // Creating Vehicle Construction Function 

function Vehicle(brand, model, speed, fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType;
}

Vehicle.prototype.accelerate=function(){
    this.speed += 20;
    console.log("Speed Increase by",this.speed)
}
Vehicle.prototype.brake=function(){
    this.speed -= 10;
    console.log("Speed Decrease by",this.speed)
}
Vehicle.prototype.refuel=function(){
    console.log("vehicle is refueling");
}


                        // Creating Car Construction Function 

function Car(brand, model, speed, fuelType,numberOfWheels){
    Vehicle.call(this,brand, model, speed, fuelType);
    this.numberOfWheels=numberOfWheels;
    this.honk=()=>{
        console.log("honking ");
    }
}                       
                    // Setting Prototype
                    
Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

let van = new Car("Tata","2021",0,"Diesel",4)

console.log(van)
van.accelerate()
van.brake()
van.refuel()
van.honk()

                    // Creating an Airplane Construction Function

function Airplane(brand, model, speed, fuelType,numberOfEngines,hasLandingGear){
    Vehicle.call(this,brand, model, speed, fuelType)
    this.numberOfEngines=numberOfEngines;
    this.hasLandingGear=hasLandingGear;
    this.takeOff=()=>{
        console.log("airplane is taking off");
    }
}                    
                // Setting Prototype

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)

let Aero = new Airplane("Indigo",1985,100,"petrol",2,true);
console.log(Aero);
Aero.accelerate()
Aero.brake()
Aero.refuel()
Aero.takeOff()
