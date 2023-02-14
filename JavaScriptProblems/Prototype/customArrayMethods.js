function MyArray() {
  this.length = 0;
}

// push()
MyArray.prototype.push = function (ele) {
  this[this.length] = ele;
  this.length++;
  return ele;
};

// pop()
MyArray.prototype.pop = function () {
  this.length--;
  let popedEle = this[this.length];
  delete this[this.length];
  return popedEle;
};
// top()
MyArray.prototype.top = function () {
  return this[this.length - 1];
};

// print()
MyArray.prototype.print = function () {
  let len = this.length;
  let res = "[";
  for (let i = 0; i < len; i++) {
    res += this[i];
    if (i < len - 1) res += ", ";
  }
  res += "]";
  return res;
};

// printReverse()
MyArray.prototype.printReverse = function () {
  let len = this.length;
  let res = "[";
  for (let i = len - 1; i >= 0; i--) {
    res += this[i];
    if (i > 0) res += ", ";
  }
  res += "]";
  return res;
};
// size()
MyArray.prototype.size = function () {
  return this.length;
};

let arr = new MyArray();
console.log(arr);
arr.push(3);
arr.push(4);
console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.top());
console.log(arr.print());
console.log(arr.printReverse());
console.log(arr.size());
