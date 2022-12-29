import { incCountAction, decCountAction } from "./Redux/Action.js";
import myStore from "./Redux/Store.js";
const incCount = (data) => {
  incCountAction(data);
};

const decCount = (data) => {
  decCountAction(data);
};

console.log(myStore.getState());
incCount(15);
console.log(myStore.getState());
decCount(10);
console.log(myStore.getState());
