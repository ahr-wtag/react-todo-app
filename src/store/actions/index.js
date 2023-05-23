import { ADD_TASK, DELETE_TASK } from "store/constants/index";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdDate = new Date();

  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
