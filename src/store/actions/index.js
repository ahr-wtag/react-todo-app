import { v1 as uuidv1 } from "uuid";
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "store/constants";

export const addTask = (task) => {
  task.id = uuidv1();
  task.createdTime = new Date();
  task.completed = false;

  return {
    type: ADD_TASK,
    payload: task,
  };
};
export const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index,
  };
};

export const completeTask = (index) => {
  return {
    type: COMPLETE_TASK,
    payload: index,
  };
};
