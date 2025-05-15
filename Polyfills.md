## What is Pollyfil ?

- A script that updates/adds new functions on browser is called “polyfill”.
- It “fills in” the gap and adds missing implementations.

## Curry

- It's a programming paradigm or pattern.
- Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument.

```js
function curry(func) {
  return function curried(...args) {
    // 'func.length' returns no of args it is accepting
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3, 4));
console.log(curriedSum(1, 2)(3, 4));
console.log(curriedSum(1, 2, 3)(4));
```

## Debouncing

- In JavaScript, debouncing is a technique used to control the rate at which a function is executed.
- Used to optimize event handling
- The idea is to wait for a certain amount of time after the last invocation of a function before actually executing it, in order to prevent multiple, rapid consecutive invocations.
- This is often useful in situations where a function is attached to an event that is triggered frequently, such as a window resize event or an input field's keyup event.

```js
const myDebounce = (callback, delay) => {
  let id;
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

function sum(a, b) {
  console.log(a + b);
}

const debounce = myDebounce(() => {
  sum(2, 3);
}, 1000);
debounce();
debounce();
debounce();
```

## Throttling

- Throttling is a technique used in JavaScript to limit the number of times a function can be called within a specified time interval.
- Used to optimize event handling

```js
const myThrottle = (callback, delay) => {
  let prev = 0;
  return function (...args) {
    let curr = Date.now();
    if (curr - prev < delay) {
      return;
    }
    prev = curr;
    callback(...args);
  };
};

function sum(a, b) {
  console.log(a + b);
}
const throttle = myThrottle(() => {
  sum(2, 3);
}, 1000);
throttle();
throttle();
throttle();
```

## What are call() apply() bind()

- Predefined JavaScript methods.
- Used to couple a function with an object.
- Used to control where `this` should refer.
- call() and apply() methods provides new value of `this` and calls the function immediately.
- bind() method sets `this` keyword and returns a constructor function.

## Call Polyfill

```js
Function.prototype.mycall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

let obj = {
  name: "sourav",
  age: 25,
};

function showDetails() {
  console.log(this.name, this.age);
}

showDetails.mycall(obj);
```

## Apply Polyfill

```js
Function.prototype.myapply = function (context = {}, args) {
  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

let obj = {
  name: "sourav",
  age: 25,
};

function showDetails(a, b) {
  console.log(this.name, this.age, a, b);
}

showDetails.myapply(obj, [2, 3]);
```

## Bind Polyfill

```js
Function.prototype.mybind = function (context = {}, ...args) {
  context.fn = this;
  return function (...args2) {
    context.fn(...args, ...args2);
    delete context.fn;
  };
};

let obj = {
  name: "sourav",
  age: 25,
};

function showDetails(a, b) {
  console.log(this.name, this.age, a, b);
}

const bind1 = showDetails.mybind(obj, 2, 3);
bind1();

const bind2 = showDetails.mybind(obj);
bind2(2, 3);
```

## Map, Filter, Reduce

```js
function MyArray() {
  this.length = 0;
}

MyArray.prototype.push = function (ele) {
  this[this.length] = ele;
  this.length++;
  return ele;
};
```

```js
MyArray.prototype.myMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};
```

```js
// own filter mothod
MyArray.prototype.myFilter = function (fun) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};
```

```js
// reduce method
MyArray.prototype.myReduce = function (callback, initValue) {
  let acc = initValue ? initValue : this[0];
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
```

```js

let arr = new MyArray();
console.log(arr);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
console.log(arr);

let arr2 = arr.myMap(function (ele) {
return ele \* 2;
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
```

## Prototype Inheritance

```js
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
```
