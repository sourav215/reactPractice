import taskReducer from "./TaskReducer";
import reduxStore from "./Store";

// const taskAction = (task) => {
//     reduxStore.dispatch({
//         type: "ADD",
//         payload: task
//     })
// }

const taskAction = (task, dispatch) => {
  dispatch({
    type: "ADD",
    payload: task,
  });
};
export default taskAction;
