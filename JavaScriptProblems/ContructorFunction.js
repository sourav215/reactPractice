// using constructor
function Car(color, model) {
  (this.color = color), (this.model = model);
}
const nexon = new Car("Teal", "EV");
console.log(nexon);


// using Class
class Mobile {
  constructor(color, model) {
    (this.color = color), (this.model = model);
  }
}
const xperia = new Mobile("White", "M1");
console.log(xperia);
