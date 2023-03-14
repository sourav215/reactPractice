const myThrottle = (callback, delay) => {
  let prev = 0;
  return function (...args) {
    let curr = Date.now();
    if (curr - prev < delay) {
      return;
    }
    prev = curr;
    callback(...args);
  };
};

function sum(a, b) {
  console.log(a + b);
}
const throttle = myThrottle(() => {
  sum(2, 3);
}, 1000);
throttle();
throttle();
throttle();
