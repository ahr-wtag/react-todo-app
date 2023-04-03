import { CREATE_BUTTON, ADD_TASK } from "../constants";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
export const createButton = () => {
  return {
    type: CREATE_BUTTON,
  };
};
