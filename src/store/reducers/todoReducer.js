import { ADD_TASK } from "../constants";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default todoReducer;
