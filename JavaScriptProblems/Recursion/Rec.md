## Problem 1

```js
const arr = [
  "a",
  [1, 2, 3],
  [
    "b",
    "c",
    ["inner", "another", ["deepinner", "deep2", ["deep3", ["deep4"]]]],
  ],
];

/*
Expected Output

 ['a', 1, 2, 3, 'b', 'c', 'inner', 'another', 'deepinner', 'deep2', 'deep3', 'deep4']

*/
```

### Solution 1

```js
function getFlatArray(arr) {
  if (Array.isArray(arr)) {
    return arr.flatMap((ele) => getFlatArray(ele));
  } else {
    return arr;
  }
}

const newArr = getFlatArray(arr);
console.log(newArr);
```

### Solution 2

```js
function getFlatArray(arr) {
  return arr.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      acc = [...acc, ...getFlatArray(ele)];
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);
}

const newArr = getFlatArray(myarr);
console.log(newArr);
```

## Problem 2

Reverse a String

```js
let str = "sourav";
function reverseStr(str) {
  // return str.split("").reverse().join("");
  return [...str].reduce((acc, ele) => ele + acc, "");
}

console.log(reverseStr(str));
```

## Problem 2

```js
let str = "key,value,pair,javascript";
/*
Expected Output
{ key: { value: { pair: {} } } }
*/
```

### Solution 1

```js
let arr = str.split(",").reverse();

let res = arr.reduce((acc, ele) => {
  return { [ele]: acc };
}, {});
console.log(res);
```

### Solution 2

```js
let arr = str.split(",");

// const recUsingArrow = (array, index = 0) =>
//   index === array.length
//     ? {}
//     : { [array[index]]: recUsingArrow(array, index + 1) };

function rec(array, index) {
  if (index === array.length) return {};

  return { [array[index]]: rec(array, index + 1) };
}

let obj = rec(arr, 0);
console.log(obj);
```

## Problem 3

Access any value of any nested object

### Using loop

```js
function getVal(obj, path) {
  let keys = path.split(".");
  let ob = obj;
  for (let k of keys) {
    if (!ob[k]) return ob[k];
    ob = ob[k];
  }
  return ob;
}

console.log(getVal(obj, "a.b.c.d.e"));
```

### Using Rec

```js
let obj = { a: { b: { c: { d: { e: null } } } } };

function getVal(obj, path) {
  let keys = path.split(".");
  return keys.reduce((acc, ele) => {
    return acc[ele];
  }, obj);
}

console.log(getVal(obj, "a.b.c"));
```

## Flatten object

```js
const person = {
  name: "John",
  address: {
    personal: {
      city: "Kolkata",
      pincode: 700001,
      id: {
        pan: 927349,
        adhaar: 9723923,
      },
    },
  },
};

/*
Expected Output
{
  name: 'John',
  city: 'Kolkata',
  pincode: 700001,
  pan: 927349,
  adhaar: 9723923
}
*/
```

### Solution

```js
let res = {};

function flattenObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenObj(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
}
flattenObj(person);
console.log(res);
```

## Flaten Object 2

```js
const person = {
  name: "John",
  address: {
    personal: {
      city: "Kolkata",
      pincode: 700001,
      id: {
        pan: 927349,
        adhaar: 9723923,
      },
    },
  },
};

/*
Expected Output
{
  person_name: 'John',
  person_address_personal_city: 'Kolkata',
  person_address_personal_pincode: 700001,
  person_address_personal_id_pan: 927349,
  person_address_personal_id_adhaar: 9723923
}

*/
```

### Solution

```js
let res = {};

function flattenObj(obj, name) {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], name + "_" + key);
    } else {
      res[name + "_" + key] = obj[key];
    }
  }
}
flattenObj(person, "person");
console.log(res);
```
