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

## Problem 6

```js
let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];
let newObj =
  /* Write your code */
  /*
create a new object called `newObj` using the `students` array & the `subjectsHash` object.
*/
  console.log(newObj);
/* 
Expected Output of `newObj`: 
{
  Prateek: ["Rust", "Javascript"],
  Yogesh: ["HTML"],
  Nrupul: ["Java"],
}
*/
```

### Solution

```js
let newObj = students.reduce((acc, ele) => {
  acc[ele.name] = acc[ele.name]
    ? [...acc[ele.name], subjectsHash[ele.subjectID]]
    : [subjectsHash[ele.subjectID]];

  return acc;
}, {});
console.log(newObj);
```

## Problem 6

```js
let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Pyton",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

let massagedData =
  /* Write your programme */

  console.log(massagedData);
/*
  Expected output from `massagedData`

  [
     {
       name: "Prateek", 
       marks: [
         {subject: 'Javascript', score: 90},
         {subject: 'HTML', score: 81},
         {subject: 'CSS', score: 80}
       ]
     },
     {
       name: "Nrupul", 
       marks: [
         {subject: 'Java', score: 95},
         {subject: 'Python', score: 85}
       ]
     },

  ]
*/
```

### Solution

```js
let massagedData = allStudentsMarksData.map((ele) => {
  let obj = {};
  obj.name = ele.name;

  for (let i = 0; i < 6; i++) {
    if (ele[`subject${i}`]) {
      obj.marks = obj.marks
        ? [
            ...obj.marks,
            {
              subject: ele[`subject${i}`],
              score: ele[`score${i}`],
            },
          ]
        : [
            {
              subject: ele[`subject${i}`],
              score: ele[`score${i}`],
            },
          ];
    }
  }
  return obj;
});
```

## Problem 7

```js
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: true },
];

/*
young -> [0,20]
mids -> [21,40]
old -> [40,Infinity]
*/
let report = voters.reduce((acc, ele) => {
  /* Write your code */
}, {});

console.log(report);
/* 
Expected Output

{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
```

### Solution

```js
const report = voters.reduce((acc, ele) => {
  if (ele.age < 21) {
    acc.numYoungPeople = acc.numYoungPeople ? acc.numYoungPeople + 1 : 1;
    acc.numYoungVotes = acc.numYoungVotes ? acc.numYoungVotes + 1 : 1;
  } else if (ele.age >= 21 && ele.age <= 39) {
    acc.numMidsPeople = acc.numMidsPeople ? acc.numMidsPeople + 1 : 1;
    acc.numMidVotes = acc.numMidVotes ? acc.numMidVotes + 1 : 1;
  }
  return acc;
}, {});
console.log(report);
```

## Problem 8

```js
const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

const ans =
  /* Write your code */

  console.log(ans);

/*
{
  Strawberry: 3,
  Vanilla: 4,
  Chocolate: 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  Pistachio: 1,
  Banana: 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
*/
```

### Solution

```js
const ans = data.reduce((acc, ele) => {
  ele.favoriteIceCreams.forEach((item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
  });

  return acc;
}, {});

console.log(ans);
```
