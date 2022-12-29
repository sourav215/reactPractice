import taskReducer from "./TaskReducer";
import reduxStore from "./Store";

const taskAction = (task) => {
    reduxStore.dispatch({
        type: "ADD",
        payload: task
    })
    // console.log(reduxStore.getState());
}
export default taskAction;