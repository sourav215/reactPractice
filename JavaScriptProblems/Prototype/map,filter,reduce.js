
/*
What is Pollyfil ?

- A script that updates/adds new functions on browser is called “polyfill”. 
- It “fills in” the gap and adds missing implementations.
*/

function MyArray() {
  this.length = 0;
}

MyArray.prototype.push = function (ele) {
  this[this.length] = ele;
  this.length++;
  return ele;
};

MyArray.prototype.myMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

// own filter mothod
MyArray.prototype.myFilter = function (fun) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

// reduce method
MyArray.prototype.myReduce = function (callback, initValue) {
  let acc = initValue ? initValue : this[0];
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

let arr = new MyArray();
console.log(arr);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
console.log(arr);

let arr2 = arr.myMap(function (ele) {
  return ele * 2;
});
console.log(arr2);

let arr3 = arr.myFilter(function (ele, index) {
  return ele >= 5;
});
console.log(arr3);

let sum = arr.myReduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(sum);
