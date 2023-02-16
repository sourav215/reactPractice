function temporary() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

const add1 = temporary();
const add2 = temporary();

add1();
add1();

add2();
