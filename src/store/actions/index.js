import { ADD_TASK } from "store/constants";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdDate = new Date();
  task.completed = false;

  return {
    type: ADD_TASK,
    payload: task,
  };
};
