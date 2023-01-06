import { LOGIN } from "./loginReducer";

export const loginAction = (userData, dispatch) => {
  dispatch({
    type: LOGIN,
    payload: userData
  });
};

export const loginThunkAction = (dispatch, getState) => {
  
}