import taskReducer from "./TaskReducer";

const taskAction = (task) => {
    taskReducer.dispatch({
        type: "ADD",
        payload: task
    })
}
export default taskAction;