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
```
