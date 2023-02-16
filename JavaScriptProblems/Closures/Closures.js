// Problem 1
/*
function find(index) {
  let arr = [];
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    arr[i] = i * i;
  }
  console.log(arr[index]);
}

find(100);
find(200);
*/

// optimize this code
// ans
/*
function find() {
  let arr = [];
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    arr[i] = i * i;
  }
  return function (index) {
    console.log(arr[index]);
  };
}

const find2 = find();
find2(100)
find2(200);
*/
//------------------------------------------------------------------------------
// setTimeOut
//-------------------------------------------------------------------------------
/*
function timer() {
    for (var i = 1; i < 5; i++) {
      function close(i) {       
        setTimeout(() => {
          console.log(i);
        }, 1000);
      }
      close(i);
    }
  }
  timer();
  */
//-------------------------------------------------------------------------------------
/*
function counter() {
    let count = 0;
    function add(c) {
      count += c;
    };
    function retrive(){
      console.log(count)
    }
    return {
      add, retrive
    }
  
  }
  
  const {add, retrive} = counter();
  add(5);
  add(6);
  retrive();
  */
 //------------------------------------------------------------------------------
 // once function
//-------------------------------------------------------------------------------
/*
 function makePayment(){
    let count = 0;

    return function(){
        if(count === 0) {
            count++;
            console.log("Payment Successful");

        }else {
            console.log("Already Paid");
        }
    }
 }

 let pay = makePayment();
 pay(); // Payment Successful
 pay(); // Already Paid

 */