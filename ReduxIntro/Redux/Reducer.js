const defaultState = { count: 0 };

const myReducer = (state = defaultState, action) => {
  if (action.type === "ADD") {
    state = {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "SUBS") {
    state = {
      ...state,
      count: state.count - action.payload,
    };
  }
  return state;
};

export default myReducer;
