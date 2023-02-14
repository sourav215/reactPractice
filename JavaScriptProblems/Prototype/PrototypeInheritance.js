// using Object.create()
function Automobile(name, model, color) {
  this.companyName = name;
  this.model = model;
  this.color = color;
}
let nexon = new Automobile("Tata", "EV", "red");
console.log(nexon);


// using Object.create
let obj = Object.create(nexon);
console.log(obj);
console.log(obj.model);


// using Prototype
function Car(fuelType) {
  this.fuelType = fuelType;
}

Car.prototype = nexon;
let obj2 = new Car("Petrol");
// obj2.__proto__ = nexon;

console.log(obj2);
console.log(obj2.model);
