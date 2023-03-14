```js
let calculator = {
  read: function () {
    this.a = +prompt("Enter a :", 0);
    this.b = +prompt("Enter b: ", 0);
  },
  sum: function () {
    return this.a + this.b;
  },
  multiply: function () {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply());
```
