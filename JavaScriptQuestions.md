## What is JS and Purpose of it

- The JavaScript is text-based programming language (Scripting Lang) for the Web. It can be used for both client and server-side application.
- JavaScript can update and change both HTML and CSS.
- JavaScript can calculate, manipulate and validate data.

## What are Data types in JS

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

- Primitive data type
- Non-primitive (reference) data type

### Primitive data types:

- Primitive data types are a set of basic data types (predefined) from which all other data types are constructed and it has no additional methods.
- They are the building blocks of data manipulation and cannot be further divided into simpler data types.

ex - String , Number , Boolean , Null , Undefined

### Non-Primitive Data types:

- Non-Primitive data types are user-defined (not predefined) data types that refer to instances or objects.
- They cannot store the `value` of a variable directly in memory. They store a `memory address` of the variable.
- Whenever a non-primitive data type is defined, it refers a memory location where the data is stored in heap memory.
- These data types are used to store multiple values.

ex - Object , Array , RegExp

## What is var , let and Const

## Explain Diff btw number data type and BigInt

## Explain about Control statement and diff btween if else if and switch

## What is Object and Array

## Explore All Array Methods and String Methods

## Diff between forEach() Map() and filter()

## Diff between slice and splice

## Diff btw == and ===

## What is for..in and for.. of

## What is DOM and DOM Manipulation

## What are call() apply() bind()

- Predefined JavaScript methods.
- Used to couple a function with an object.
- Used to control where `this` should refer.
- call() and apply() methods provides new value of `this` and calls the function immediately.
- bind() method sets `this` keyword and returns a constructor function.

Example - 1

```js
const person = {
  name: "Rohan",
  age: 24,
};

function showDetails(gender, hobby) {
  this.gender = gender;
  this.hobby = hobby;
  console.log(this.name, this.age);
}

showDetails.call(person, "Male", "Reading Books");

showDetails.apply(person, ["Male", "Reading Books"]);

const mybind = showDetails.bind(person, "Male", "Reading Books");
mybind();
```

Example - 2

```js
// Find Min element
let arr = [4, 10, 5, 9, 2, 7];

let min = Math.min.apply(Math, arr);
console.log(min);
```

### What is Promise and Explain Promise

### What is Promise Chain

### Drawback of Callbacks and what is callback chain

### Explain Clousers, Why do we need it

### Explain Fetch

The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a `promise`.

### Why we need to handle then() two times in fetch

### What is OOPs and Explain its Features

https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/

## What is Spread Operetor ?

The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

## What is Rest Parameter ?

The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

### What is diff btw spread OPerator and rest Parameter

### Explain about this keyword in JS

### Explain Prototype

### What is event

### Explain Event Propagation

### Explain diff btween Event Bubbling and Event Capturing

### How can we restrict Event Bubbling and Event Capturng behaviour

### What is aync await

### In how many ways we can handle Promise

### Why do we need Promise

### What is diff between normal function and arrow function

### What are the states of Promise Object

### What is Generator function in JS

### How to compare Object and How to find the Object is empty or not

### What is Set

### SetTimeout and setInterval

### What is Browser Object Model (BOM)

### Explain Storages of Browser

## Regular Expressions

A regular expression is a sequence of characters that forms a `search pattern`.

The search pattern can be used for text search and text replace operations.

Uses -

- Validate User Input
- Search Inside text

### What is Hositing

## What is Shadowing

- Variable shadowing occurs when a variable declared within a certain scope (decision block, method, or inner class) has the same name as a variable declared in an outer scope. This outer variable is said to be shadowed.

- If there is a variable in the global scope, and you'd like to create a variable with the same name in a function. The variable in the inner scope will temporarily shadow the variable in the outer scope.

## Diff between var, let and Const

| Var                                                                | Let                                                                | const                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| var has the function or global scope.                              | let's have the block scope.                                        | const variable has the block scope.                                 |
| It gets hoisted to the top of its scope and initialized undefined. | It also got hoisted to the top of its scope but didn't initialize. | It also got hoisted to the top of its scope but didn't initialize.  |
| It can be updated or re-declared.                                  | It can only be updated and can't be re-declared.                   | It can't be updated or re-declared.                                 |
| It's an old way to declare a variable.                             | It's a new way to declare variables introduced in ES6.             | It's also a new way to declare a variable, which introduces in ES6. |

## Explain Module Concept in JS

- In JavaScript, a module is a self-contained unit of code that can be used to encapsulate related functions, variables, and objects.
- Modules allow developers to create reusable code that can be shared and imported by other parts of an application, making it easier to organize and maintain large codebases.

## Debouncing

- In JavaScript, debouncing is a technique used to control the rate at which a function is executed.
- The idea is to wait for a certain amount of time after the last invocation of a function before actually executing it, in order to prevent multiple, rapid consecutive invocations.
- This is often useful in situations where a function is attached to an event that is triggered frequently, such as a window resize event or an input field's keyup event.

Example - 1

```js
let id;
function debounce(func) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(func, 2000);
}

function postRequest() {
  console.log("request send ...");
}

// debounce(postRequest); // 10 sec
// debounce(postRequest); //10.1 sec
// debounce(postRequest); // 10.2 sec

debounce(postRequest);

setTimeout(() => {
  debounce(postRequest);
}, 3000);
setTimeout(() => {
  debounce(postRequest);
}, 4000);
```

### Currying

- It's a programming paradigm or pattern.
- Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument.

- The idea is to break down a function that takes multiple arguments into a series of functions that each take a single argument.
- This allows you to partially apply arguments to the function, creating a new function that takes the remaining arguments.

Example - 1

```js
// Normal Function
function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(1, 2, 3));

// Curried Version
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(curriedMultiply(1)(2)(3));
```

Example - 2

```js
// Discount Function
function discount(disc) {
  return function (price) {
    return price - price * disc;
  };
}
const tenPercentDiscount = discount(0.1);
const twentyPercentDiscount = discount(0.2);

console.log(tenPercentDiscount(500));
console.log(twentyPercentDiscount(1200));
```

Example - 3

```js
// function curry(func) {
//   return function curried(...args) {
//     // 'func.length' returns no of args it is accepting
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, [...args, ...args2]);
//       };
//     }
//   };
// }

function curry(func) {
  return function curried(...args) {
    // 'func.length' returns no of args it is accepting
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3, 4));
console.log(curriedSum(1, 2)(3, 4));
console.log(curriedSum(1, 2, 3)(4));
```

We can use `_.curry()` Method from Lodash Library.

### Throttling

### Async vs defer
