Array.prototype.svReduce = function (cb, init) {
  let acc = init ? init : this[0];

  for (let i = init ? 0 : 1; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

let arr = [5, 2, 3, 4];
let newArr = arr.svReduce((acc, ele) => {
  return acc + ele;
});
console.log(newArr);
