import { ADD_TASK } from "store/constants";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdDate = new Date();

  return {
    type: ADD_TASK,
    payload: task,
  };
};
