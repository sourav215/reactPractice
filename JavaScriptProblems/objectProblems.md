## Problem 1

```js
let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// [16, 20, 23, 30]

let newArr =
  /* Write code */;

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
  /* your code here */;

console.log(newArr); // {John: 1, Pete: 2, Mary: 3}
```

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

## Problem 3

```js
let data = [
  { name: "John", subject: "Javascript" },
  { name: "John", subject: "HTML" },
  { name: "John", subject: "CSS" },
  { name: "Pete", subject: "Java" },
  { name: "Pete", subject: "English" },
  { name: "Pete", subject: "Maths" },
  { name: "Mary", subject: "Rust" },
  { name: "Mary", subject: "Elm" },
];

let subjectHash = data.reduce((acc, item) => {
  /* Write code here */
}, {});

console.log(subjectHash);
/*
Expected output:
{
  John: ["Javascript", "HTML", "CSS"],
  Pete: ["Java", "English", "Maths"],
  Mary: ["Rust", "Elm"]
}
*/
```

### Solution

```js
let subjectHash = data.reduce((acc, item) => {
  /* Write code here */
  acc[item.name] = acc[item.name]
    ? [...acc[item.name], item.subject]
    : [item.subject];
  return acc;
}, {});

console.log(subjectHash);
```

## Problem 4

```js
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = /* ... your code ... */ ;
console.log(usersMapped);

/*
Expected output:
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
```

### Solution

```js
let usersMapped = users.map((ele) => {
  return {
    fullName: ele.name + " " + ele.surname,
    id: ele.id,
  };
});
console.log(usersMapped);
```

## Problem 5

```js

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

function getGreeting(firstName, lastName) {
  return `Hi from ${firstName} ${lastName}.`
}

let usersGreetings = /* your code here */  ;

console.log(usersGreetings);
/*
Expected output:
["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
*/
```

### Solution

```js
let usersGreetings = users.map((ele) => {
  return getGreeting(ele.name, ele.surname);
});

console.log(usersGreetings);
```
