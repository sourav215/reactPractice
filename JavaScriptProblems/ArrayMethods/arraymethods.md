## Array.isArray()

```js
Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true
```

## .entries()

```js
const arr = [1, 2, 3];
for (let [key, value] of arr.entries()) {
  console.log(key, value);
}

// 0 1
// 1 2
// 2 3
```

## .keys() and .values()

```js
const arr = ["a", "b", "c"];

for (let key of arr.keys()) {
  console.log(key);
}
// 0 1 2

for (let value of arr.values()) {
  console.log(value);
}
// a b c
```

## .every()

```js
const arr = [1, 2, 3];

const res1 = arr.every((ele) => ele < 5);
const res2 = arr.every((ele) => ele % 2 == 0);

console.log(res1);
console.log(res2);

// true
// false
```

## .fill()

```js
const arr = [1, 2, 3];

arr.fill(5);

console.log(arr);

// [ 5, 5, 5 ]
```

## .forEach()

```js
const arr = [1, 2, 3];

const res = arr.forEach((ele, i) => {
  console.log(ele, i);
});

console.log(res);

// 1 0
// 2 1
// 3 2
// undefined
```

## .map()

```js
const arr = [1, 2, 3];

const res = arr.map((ele, i) => {
  return ele * 2;
});

console.log(res);

// [ 2, 4, 6 ]
```

## .filter()

```js
const arr = [1, 2, 3];

const res = arr.filter((ele, i) => {
  return ele % 2 == 0;
});

console.log(res);
// [2]
```

## .reduce()

```js
const arr = [1, 2, 3];

const res = arr.reduce((acc, ele, i) => {
  acc += ele;
  return acc;
}, 0);

console.log(res);
//  6
```

## .some()

```js
const arr = [1, 2, 3];

const isEvenNumberPresent = arr.some((ele) => ele % 2 == 0);
console.log(isEvenNumberPresent);
// true
```

## .find()

```js
const arr = [10, 20, 30, 40];

const element = arr.find((ele, i) => {
  return ele > 15;
});

console.log(element);
// 20
```

## .findLast()

```js
const arr = [10, 20, 30, 40];

const index = arr.findLast((ele, i) => {
  return ele > 15;
});

console.log(index);
// 40
```

## .findIndex()

```js
const arr = [10, 20, 30, 40];

const index = arr.findIndex((ele, i) => {
  return ele > 15;
});

console.log(index);
// 1
```

## .findLastIndex()

```js
const arr = [10, 20, 30, 40];

const index = arr.findLastIndex((ele, i) => {
  return ele > 15;
});

console.log(index);
// 3
```

## .flat(depth)

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

const res = arr.flat(Infinity);

console.log(res);
// [
//   'a',         1,
//   2,           3,
//   'b',         'c',
//   'inner',     'another',
//   'deepinner', 'deep2',
//   'deep3',     'deep4'
// ]
```

## .flatMap()

```js
const employees = [
  {
    id: 1,
    name: "Alice",
    skills: ["HTML", "CSS", "React"],
    projects: [
      {
        name: "WebsiteRedesign",
        tasks: ["Design", "Implement"],
      },
      {
        name: "MobileApp",
        tasks: ["Homepage", "Login"],
      },
    ],
  },

  {
    id: 2,
    name: "Charlie",
    skills: ["JavaScript", "HTML", "CSS"],
    projects: [
      {
        name: "AnalyticsDashboard",
        tasks: ["Fetch", "Display"],
      },
      {
        name: "MobileApp",
        tasks: ["Homepage"],
      },
    ],
  },
];

const res = employees.flatMap((ele) => ele.skills);

console.log(res);
// [ 'HTML', 'CSS', 'React', 'JavaScript', 'HTML', 'CSS' ] duplicate elem present

const res2 = employees.flatMap((ele) =>
  ele.projects.flatMap((proj) => proj.tasks)
);

console.log(res2);
// ['Design','Implement','Homepage','Login','Fetch','Display','Homepage']       duplicate elem present
```

- Modification

```js
const res = [...new Set(employees.flatMap((ele) => ele.skills))];
const res2 = [
  ...new Set(
    employees.flatMap((ele) => ele.projects.flatMap((proj) => proj.tasks))
  ),
];
```

## .includes()

```js
const arr = [1, 2, 3];

const res = arr.includes(2);

console.log(res);
// true
```

## .join()

```js
const elements = ["Fire", "Air", "Water"];

const res = elements.join("_");
```
