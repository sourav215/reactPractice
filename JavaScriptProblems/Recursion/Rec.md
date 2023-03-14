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
