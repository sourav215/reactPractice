import { incCountAction } from "./Redux/Action.js";
import myStore from "./Redux/Store.js";
function incCount(data) {
  incCountAction(data);
}

function decCount() {}

console.log(myStore.getState());
incCount(5);
console.log(myStore.getState());
