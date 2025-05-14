## Problem 1: optimize this code

```
function find(index) {
  let arr = [];
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    arr[i] = i * i;
  }
  console.log(arr[index]);
}

find(100);
find(200);
```

```js
function find() {
  let arr = [];
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    arr[i] = i * i;
  }
  return function (index) {
    console.log(arr[index]);
  };
}

const find2 = find();
find2(100);
find2(200);
```

## SetTimeout Optimisation

```
function timer() {
    for (var i = 1; i < 5; i++) {

        setTimeout(() => {
          console.log(i);
        }, 1000);

    }
  }
  timer();

  // Output: 5 5 5 5
```

```js
function timer() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      // Create a fun
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }

    close(i); // And call imediately
  }
}
timer();

// Output: 1 2 3 4 5
```

```
function timer() {
  for (var i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
timer();

// Output:
1sec -> 5
2sec -> 5
3sec -> 5
4sec -> 5
```

```js
function timer() {
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
timer();

// Output:
// 1sec -> 1
// 2sec -> 2
// 3sec -> 3
// 4sec -> 4
```

```js
function timer() {
  for (var i = 1; i < 5; i++) {
    setTimeout(() => {
      (function timer() {
        for (var j = i; j <= 5; j++) {
          setTimeout(() => {
            console.log(j);
          }, 1000);
        }
      })();
    }, 1000);
  }
}
timer();

// 6
// 6
// 6
// 6
```

```js
function timer() {
  for (var i = 1; i < 5; i++) {
    setTimeout(() => {
      (function timer() {
        for (let j = i; j <= 5; j++) {
          setTimeout(() => {
            console.log(j);
          }, 1000);
        }
      })();
    }, 1000);
  }
}
timer();

// 5
// 5
// 5
// 5
```

```js
function timer() {
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      (function timer() {
        for (var j = i; j <= 5; j++) {
          setTimeout(() => {
            console.log(j);
          }, 1000);
        }
      })();
    }, 1000);
  }
}
timer();

// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// 6
```

```js
function timer() {
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      (function timer() {
        for (let j = i; j <= 5; j++) {
          setTimeout(() => {
            console.log(j);
          }, 1000);
        }
      })();
    }, 1000);
  }
}
timer();

// 1
// 2
// 3
// 4
// 5
// 2
// 3
// 4
// 5
// 3
// 4
// 5
// 4
// 5
```

## Module System

```js
function counter() {
  let count = 0;
  function add(c) {
    count += c;
  }
  function retrive() {
    console.log(count);
  }
  return {
    add,
    retrive,
  };
}

const { add, retrive } = counter();
add(5);
add(6);
retrive();
```

## Once Function

```js
function makePayment() {
  let count = 0;

  return function () {
    if (count === 0) {
      count++;
      console.log("Payment Successful");
    } else {
      console.log("Already Paid");
    }
  };
}

let pay = makePayment();
pay(); // Payment Successful
pay(); // Already Paid
```
