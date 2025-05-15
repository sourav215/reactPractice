## Object.keys()

```js
const obj = {
  name: "Sourav",
  age: 25,
};

const keys = Object.keys(obj);
console.log(keys);
//[ 'name', 'age' ]

for (let key of Object.keys(obj)) {
  console.log(key);
}

for (let key in obj) {
  console.log(key);
}
```

## Object.values()

```js
const obj = {
  name: "Sourav",
  age: 25,
};

const keys = Object.values(obj);
console.log(keys);
//[ 'Sourav', 25 ]

for (let value of Object.values(obj)) {
  console.log(value);
}
```

## Object.entries()

- Object to Array

```js
const obj = {
  name: "Sourav",
  age: 25,
};

console.log(Object.entries(obj));

// [ [ 'name', 'Sourav' ], [ 'age', 25 ] ]

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// name Sourav
// age 25
```

## Object.fromEntries()

- Array to Object

```js
// Array
const entries = [
  ["name", "sourav"],
  ["age", 25],
];
// Map
const entries = new Map([
  ["name", "sourav"],
  ["age", 25],
]);

const obj = Object.fromEntries(entries);
console.log(obj);
// { name: 'sourav', age: 25 }

for (let key in obj) {
  console.log(obj[key]);
}
```

## Object.freeze()

```js
const obj = {
  name: "Sourav",
  age: 25,
};

Object.freeze(obj);
obj.name = "Rick";

console.log(obj);
// { name: 'Sourav', age: 25 }
```
