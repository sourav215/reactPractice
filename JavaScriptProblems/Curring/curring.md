## Problem 1

foo(1)(2)(3)(4)() // create fun for it;

```js
function foo(a) {
  return function (b) {
    if (b) {
      return foo(a + b);
    } else {
      return a;
    }
  };
}

console.log(foo(1)(2)(3)(4)());
```

## Problem 2

Infinite curring -> sum(1)(2)(3)..(n);

## Problem 3

```js
function curry(fun) {
  return function gc(...args) {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      return function (...remaining) {
        return gc(...args, ...remaining);
      };
    }
  };
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)(5));
```
