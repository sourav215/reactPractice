import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import loginReducer from "../Components/Login/Redux/Login/loginReducer";
import { Reducer } from "./Reducer.js";
import { reducer } from "../Components/Login/Redux/Payment/reducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

const combReducer = combineReducers({
  login: loginReducer,
  Reducer,
  reducer,
});
const reduxStore = createStore(combReducer, applyMiddleware(logger, thunk));

export default reduxStore;
