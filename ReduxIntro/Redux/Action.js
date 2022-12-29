import myStore from "./Store.js";
export const incCountAction = (data) => {
  myStore.dispatch({type: "Add", payload: data});
};
