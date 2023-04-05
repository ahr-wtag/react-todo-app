import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "store/constants";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case COMPLETE_TASK:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      });

    default:
      return state;
  }
};

export default todoReducer;
