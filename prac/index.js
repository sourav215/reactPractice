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
function parent(){
  let a = 10;
  let b = 20;
  return function(){
    console.log("Child", a);
    return function(){
      console.log("Grand Child", "hsdh");
    }
  }
}

let inner = parent();

console.dir(inner);
inner();

