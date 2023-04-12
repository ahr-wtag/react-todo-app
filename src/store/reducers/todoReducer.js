import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "store/constants";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: true } : task
      );

    case EDIT_TASK: {
      const targetedTask = state.findIndex(
        (task) => task.id == action.payload.id
      );

      state[targetedTask].task = action.payload.task;
      return state;
    }

    default:
      return state;
  }
};

export default todoReducer;
