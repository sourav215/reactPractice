import { legacy_createStore as createStore } from "redux";
import taskReducer from "./TaskReducer";
const reduxStore = createStore(taskReducer);

export default reduxStore;
