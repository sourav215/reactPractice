export const LOGIN = "LOGIN";
const userData = JSON.parse(sessionStorage.getItem("loggedInUserInfo"));

const initState = {
  isAuth: (userData)? true: false,
  name: "",
  phoneNumber: "",
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        isAuth: payload.isAuth,
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
