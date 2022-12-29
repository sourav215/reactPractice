import { incCountAction , decCountAction} from "./Redux/Action.js";
import myStore from "./Redux/Store.js";
function incCount(data) {
  incCountAction(data);
}

function decCount(data) {
    decCountAction(data);

}

console.log(myStore.getState());
incCount(15);
console.log(myStore.getState());
decCount(10);
console.log(myStore.getState());
