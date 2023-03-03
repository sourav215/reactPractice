// function foo(){
//   let a = 10;
//   return function child(){
//     let b = 20;
//     return function(){
//       console.log(a+b);
//       // console.log("hello");
//     }
//   }
// }

// let goat = foo();
// let cow = goat();

// console.dir(cow);
// function parent(){
//   let a = 10;
//   let b = 20;
//   return function(){
//     let c = 30;
//     console.log("Child", a);
//     return function(){

//       console.log("Grand Child", b, c);
//     }
//   }
// }

// let inner = parent();
// let inn = inner();
// console.dir(inn);
// inner();

function foo(){
  let a = 10;
  function moo(){
    let b = 20;
    let c = a;
  }
  console.dir(moo);
}
foo();

