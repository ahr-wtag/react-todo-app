import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "../constants";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter((st) => st.id !== action.payload);

    case COMPLETE_TASK:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      });

    case EDIT_TASK:
      return [
        ...state.filter((task) => task.id !== action.payload.id),
        action.payload,
      ];

    default:
      return state;
  }
};

export default todoReducer;
