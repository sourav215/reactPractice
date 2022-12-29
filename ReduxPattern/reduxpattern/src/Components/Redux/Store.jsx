import { legacy_createStore as createStore, applyMiddleware } from "redux";
import taskReducer from "./TaskReducer";
import { logger } from "redux-logger";

const reduxStore = createStore(taskReducer, applyMiddleware(logger));

export default reduxStore;
