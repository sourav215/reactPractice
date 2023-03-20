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
  narr = arr.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      acc = [...acc, ...getFlatArray(ele)];
    } else {
      acc.push(ele);
    }
    return acc;
  }, []);
  return narr;
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
let arr = str.split(",");

function rec(array, index) {
  if (index === array.length) return {};

  return { [array[index]]: rec(array, index + 1) };
}

let obj = rec(arr, 0);
console.log(obj);
```

### Solution 2

```js
let arr = str.split(",");

let obj = {};

obj[arr[arr.length - 1]] = {};

for (let i = arr.length - 2; i >= 0; i--) {
  obj[arr[i]] = { ...obj };
  delete obj[arr[i + 1]];
}
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
