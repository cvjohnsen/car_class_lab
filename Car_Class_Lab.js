class Car {
constructor (brand,fuelTank, model, color, year, bodyStyle, fuel, mpg, odometer){

 this.brand = brand   
 this.fuelTank = fuelTank
 this.model = model
 this.color = color
 this.year = year
 this. body = bodyStyle
 this.fuel = fuel
 this.mpg = mpg
 this.odometer = odometer
}

 getDetails(){
    return `${this.color} ${this.year} ${this.brand} `
  }
  
  addFuel(amount){
    if(this.fuel + amount > this.fuelTank){
      this.fuel = this.fuelTank
      console.log("FULL!")
    }else{
    this.fuel += amount
    }
  }
  
  setColor(newColor){
    this.color = newColor
  }
  
  drive(){
    //can only drive IF there is fuel in the tank
      while(this.fuel > 0){
        this.fuel -= 1
        this.odometer += this.mpg
      }

  }  
}


let newCar = new Car ('subaru',15, 'sti', 'silver', 2021, 'hatch', 0, 23, 0)
let myCar = new Car ('honda', 15, 'pilot', 2016, 'suv', 0, 25, 0 )



// Your Car Class needs to include the following:

// Attributes:

// brand,
// model,
// color, 
// year,
// body style,
// fuel,
// mpg,
// odometer

// Methods:
// drive - car can only drive if there is fuel in the tank
// for every mile the car drives, the fuel level should change ;)
// Drive until you run out of fuel, increase your odometer

// add fuel - should not allow fuel level to increase higher than the fuel tank capacity

// change color,

// get car details