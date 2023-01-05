import {
    legacy_createStore as createStore,
    applyMiddleware,
  } from "redux";
  
  import loginReducer from "./Login/loginReducer";
  import { logger } from "redux-logger";
  
   
  const reduxStore = createStore(loginReducer, applyMiddleware(logger));
  
  export default reduxStore;