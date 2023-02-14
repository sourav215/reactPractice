// using Object.create()
function Automobile(name, model, color) {
    this.companyName = name;
    this.model = model;
    this.color = color;
  }
  let nexon = new Automobile("Tata", "Nexon", "red");
  console.log(nexon);
  
  // it creates an empty object
  let obj = Object.create(nexon);
  console.log(obj);
  
  function Car(fuelType) {
    this.fuelType = fuelType;
  }
  
  // Car.prototype = Automobile;
  
  Car.prototype = nexon;
  let obj2 = new Car("Petrol");
  
  console.log(obj2);
  console.log(obj2.model);
  