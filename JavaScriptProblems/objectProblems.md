## Problem 1

```js
let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// [16, 20, 23, 30]

let newArr =
  /* Write code */

  console.log(newArr); // [16, 20, 23, 30];
```

### Answer

```js
let newArr = users.reduce((acc, ele) => {
  acc.push(ele.age);
  return acc;
}, []);
console.log(newArr);
```

```js
let newArr = users.map((ele) => ele.age);
console.log(newArr);
```

## Problem 2

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let obj = {};
let newArr =
  /* your code here */

  console.log(newArr); // {John: 1, Pete: 2, Mary: 3}
```

<hr>
Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here.

Problem Statement: you are expected to use of the array mehtods to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user
and the values would be the id of the user

<hr>

### Solution:

```js
let newArr = users.reduce((acc, ele) => {
  acc[ele.name] = ele.id;
  return acc;
}, {});
console.log(newArr);
```

```js
let obj = {};
users.map((elem) => (obj[elem.name] = elem.id));
console.log(obj);
```
