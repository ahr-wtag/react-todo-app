import { v1 as uuidv1 } from "uuid";
import { ADD_TASK, DELETE_TASK } from "store/constants";

export const addTask = (task) => {
  task.id = uuidv1();
  task.createdTime = new Date();
  task.completed = false;

  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};
