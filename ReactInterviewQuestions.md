### 1. What is Reactjs?

```
React is a JavaScript library for building user interfaces.
It was developed by Jordan Walke, Facebook.

It is an open-source, component-based, front-end library responsible only for the application view layer.
The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps.
It uses virtual DOM (JavaScript object), which improves the performance of the app.
The JavaScript virtual DOM is faster than the regular DOM.
We can use ReactJS on the client and server-side as well as with other frameworks.

```

### 2. When was React first released?

```
React was first released on March 2013.
```

### What is Library?

```
Library is a collection of Predefined Functions or Classes or Properties.
Ex. React, Redux, JQuery
```

### What is Framework?

```
Framework is a collection of Libraries which provides set of rules to develop a application.
```

### 3. Does React use HTML?

```
No, It uses JSX, which is similar to HTML.
```

### Advantages of React

```
Simple and Easy to learn.
Is a small library and learning curve is very small.
React has supported by facebook.
React community is very very big.
React Provide Reusability
React Applications are very very fast (Vertual DOM)
Development Process is very fast.
Uses Single directional data flow model. (One-directional data binding)
```

### Disdvantages of React

- High pace of development: React's development moves quickly which means that there are often new updates, features, and changes to keep up with.
- Complexity: React applications can become complex if they are not well-structured, particularly as the number of components grows.
- It's not a complete framework. You have to have some dependencies to build UI.

### Give me two most significant drawbacks of React

```
   1. Integrating React with the MVC framework like Rails requires complex
   configuration.
   2. React require the users to have knowledge about the integration of user interface into MVC framework.
```

<a>https://www.javatpoint.com/pros-and-cons-of-react </a>

### What is createElement() ?

```js
Predefined function of React used to create React Element.

    reference =   React.createElement( type, [props], [...children] )
    let h2ref =   React.createElement( "h2", attributes , "I am content" );

```

### What is ReactDOM ?

```
Its not from React Library.
ReactDOM is a separate library.
-> Helps to append React Element inside DOM.(HTML)
   it provies a predefined function called 'render()'. Using this we can append React Element inside DOM.
```

### Difference between ReactDOM.render() and render() in React ?

```js
// render() in ReactDOM
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById("root"));

// render() in React
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

### State the difference between Real DOM and Virtual DOM

#### Real DOM

```
    It is updated slowly.
    It allows a direct update from HTML.
    It wastes too much memory.
```

#### Virtual DOM

```
    It updates faster.
    It cannot be used to update HTML directly.
    Memory consumption is less
```

### What is Babel?

```
Babel is a JavaScript compiler.
Babel library provides us a "compiler" using which we can convert our "JSX" code into "native React" code.
```

### What is JSX ?

```
It's a new technique to create react element.
Browser doesn't understand JSX.

```

### What is DOM ?

- The Document Object Model (DOM) is a `programming interface` for HTML and XML documents.
- It represents the structure of a document as a tree of objects (nodes), with each object representing a different part of the document (e.g. an element, an attribute, or text content).
- The DOM allows developers to programmatically access and manipulate the contents of a document, including adding, removing, or modifying elements and their attributes. This is commonly used to create dynamic web pages and web applications.
- The DOM is also used by `browser rendering engines` to display the content of a web page on the screen.

### What is virtual DOM ?

<a>https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-render-in-reactjs</a>

### What is Flux Concept In React?

Facebook widely uses flux architecture concept for developing client-side web
applications. It is not a framework or a library. It is simply a new kind of architecture
that complements React and the concept of Unidirectional Data Flow.
3 | P a g e 3. Define the term Redux in React
Redux is a library used for front end development. It is a state container for JavaScript
applications which should be used for the applications state management. You can test
and run an application developed with Redux in different environments. 4. What is the 'Store' feature in Redux?
Redux has a feature called 'Store' which allows you to save the application's entire State
at one place. Therefore all it's component's State are stored in the Store so that you will
get regular updates directly from the Store. The single state tree helps you to keep track
of changes over time and debug or inspect the application. 5. What is an action in Redux?
It is a function which returns an action object. The action-type and the action data are
always stored in the action object. Actions can send data between the Store and the
software application. All information retrieved by the Store is produced by the actions.

### Explain the term stateless components

Stateless components are pure functions that render DOM-based solely on the
properties provided to them.

### Explain React Router

React Router is a routing library which allows you to add new screen flows to your
application, and it also keeps URL in sync with what’s being shown on the page.

### What is dispatcher?

A dispatcher is a central hub of app where you will receive actions and broadcast
payload to registered callbacks.

### What is meant by callback function? What is its purpose?

A callback function should be called when setState has finished, and the component is
retendered. As the setState is asynchronous, which is why it takes in a second callback
function.

### Explain the term high order component

- A higher-order component also shortly known as HOC is an advanced technique for
  reusing component logic. It is not a part of the React API, but they are a pattern which
  emerges from React’s compositional nature.
- Higher Order Components (HOC) in React are a design pattern that allows developers to reuse component logic. HOCs are a way to share behavior among components. They are a higher-order function that takes a component as an argument and returns a new component with additional functionality. The returned component is a "wrapped" version of the original component, with the added functionality being provided by the HOC. This allows for code reuse and separation of concerns, making it easier to manage and maintain the codebase. HOCs are often used for tasks such as authentication, performance optimization, and props manipulation.

### Explain the Presentational segment

A presentational part is a segment which allows you to renders HTML. The segment’s
capacity is presentational in markup.

### What are Props in react js?

Props mean properties, which is a way of passing data from parent to child. We can say
that props are just a communication channel between components. It is always moving
from parent to child component.

### Explain yield catchphrase in JavaScript

The yield catchphrase is utilized to delay and resume a generator work, which is known
as yield catchphrase.

### Name two types of React component

Two types of react Components are:
Function component
Class component

### Explain synthetic event in React js

Synthetic event is a kind of object which acts as a cross-browser wrapper around the
browser’s native event. It also helps us to combine the behaviors of various browser into
signal API.

### What is React State?

It is an object which decides how a specific component renders and how it behaves. The
state stores the information which can be changed over the lifetime of a React
component.

### The arrow function helps you to predict the behavior of bugs when passed as a callback.

Therefore, it prevents bug caused by this all together.

### State the main difference between Pros and State

The main difference the two is that the State is mutable and Pros are immutable.

### Explain pure components in React js

Pure components are the fastest components which can replace any component with
only a render(). It helps you to enhance the simplicity of the code and performance of the
application.

### What kind of information controls a segment in React?

There are mainly two sorts of information that control a segment: State and Props
State: State information that will change, we need to utilize State.
Props: Props are set by the parent and which are settled all through the lifetime
of a part.

### What is 'create-react-app'?

'create-react-app' is a command-line tool which allows you to create one basic react
application.

### Explain the use of 'key' in react list

Keys allow you to provide each list element with a stable identity. The keys should be
unique.

### What are children prop?

Children props are used to pass component to other components as properties.

### Explain error boundaries?

Error boundaries help you to catch Javascript error anywhere in the child components.
They are most used to log the error and show a fallback UI.

### What is the use of empty tags ?

Empty tags are used in React for declaring fragments.

### Explain strict mode

StrictMode allows you to run checks and warnings for react components. It runs only on
development build. It helps you to highlight the issues without rendering any visible UI.

### What are reacted portals?

Portal allows you to render children into a DOM node. CreatePortalmethod is used for
it.

### What is Context?

React context helps you to pass data using the tree of react components. It helps you to
share data globally between various react components.

### What is the use of Webpack?

Webpack in basically is a module builder. It is mainly runs during the development
process.

### What is Babel in React js?

Babel, is a JavaScript compiler that converts latest JavaScript like ES6, ES7 into plain
old ES5 JavaScript that most browsers understand.

### How can a browser read JSX file?

If you want the browser to read JSX, then that JSX file should be replaced using a JSX
transformer like Babel and then send back to the browser.

### What are the major issues of using MVC architecture in React?

Here are the major challenges you will face while handling MVC architecture:

- DOM handling is quite expensive
- Most of the time applications were slow and inefficient
- Because of circular functions, a complex model has been created around
  models and ideas

### What can be done when there is more than one line of expression?

At that time a multi-line JSX expression is the only option left for you.

### What is the reduction?

The reduction is an application method of handling State.

### Explain the term synthetic events

It is actually a cross-browser wrapper around the browser’s native event. These events
have interface stopPropagation() and preventDefault().

### When should you use the top-class elements for the function element?

If your element does a stage or lifetime cycle, we should use top-class elements.

### How can you share an element in the parsing?

Using the State, we can share the data.

### Explain the term reconciliation

When a component's state or props change then rest will compare the rendered element
with previously rendered DOM and will update the actual DOM if it is needed. This
process is known as reconciliation.

### How can you re-render a component without using setState() function?

You can use forceUpdate() function for re-rending any component.

### Can you update props in react?

You can’t update props in react js because props are read-only. Moreover, you can not
modify props received from parent to child.

### Explain the term 'Restructuring.'

Restructuring is extraction process of array objects. Once the process is completed, you
can separate each object in a separate variable.

### Can you update the values of props?

It is not possible to update the value of props as it is immutable.

### Explain the meaning of Mounting and Demounting

- The process of attaching the element to the DCOM is called mounting.
- The process of detaching the element from the DCOM is called the demounting
  process.

### What is the use of ‘props-types’ liberary?

'Prop-types' library allows you to perform runtime type checking for props and similar
object in a recent application

### What is diff between anchor tag and Link component in React ?

```
An anchor tag, also known as a link or hyperlink, is an HTML element used to create links to other pages or websites. It is typically represented by the <a> tag.

In React, the Link component is a higher-order component (HOC) provided by the react-router-dom library. It is used to navigate within a single-page application (SPA) and does not cause a `full page reload when clicked`. It is similar to the anchor tag in HTML, but it is implemented as a React component and can be used in `conjunction` with the React router to handle client-side routing.

```

## What is Single Page Application (SPA) ?

A Single Page Application (SPA) is a web application or website that loads a single HTML page and dynamically updates the content as the user interacts with the app.

- Traditional web applications, reload the entire page each time the user clicks a link or submits a form (takes an action).
- SPAs are built using JavaScript frameworks and libraries such as Angular, React, and Vue.js. They use client-side routing to handle navigation and update the app's URL, allowing users to share and bookmark specific pages within the app.
- Compared to the “traditional” application, SPA is less secure. Due to Cross-Site Scripting (XSS), it enables attackers to inject client-side scripts into web application by other users.

## What is useCallback ?

https://codesandbox.io/s/usecallback-usememo-memo-0tl5ke

## What is memo ?

https://codesandbox.io/s/usecallback-usememo-memo-0tl5ke

## What is useMemo ?

https://codesandbox.io/s/usecallback-usememo-memo-0tl5ke
