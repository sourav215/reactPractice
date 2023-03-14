## Call Polyfill

```js
Function.prototype.svcall = function (context = {}, ...args) {
  context.fun = this;
  context.fun(...args);
};

let obj = {
  name: "sourav",
  age: 25,
};

function showDetails() {
  console.log(this.name, this.age);
}

showDetails.svcall(obj);
```

## Apply Polyfill

```js
Function.prototype.svapply = function (context = {}, args = []) {
  context.fun = this;
  context.fun(...args);
};

let obj = {
  name: "sourav",
  age: 25,
};

function showDetails(a, b) {
  console.log(this.name, this.age, a, b);
}

showDetails.svapply(obj, [2, 3]);
```
