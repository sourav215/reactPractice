const initialState = [];
const taskReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    state = [...state, action.payload];
  }
  return state;
};
export default taskReducer;
