## Problem 1

```js
const decimalArr = [1, 2, 3, 4, 5];

const binaryArray =
  /* write your code here */
  console.log(binaryArray);
/*
Expected Output
[ '1', '10', '11', '100', '101' ]

*/
```

### Solution

```js
const binaryArray = decimalArr.map((ele) => {
  return ele.toString(2);
});
```
