import { v1 as uuidv1 } from "uuid";
import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  PAGINATION_UPDATE,
} from "store/constants";

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

export const completeTask = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};

export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};

export const paginationLimitUpdate = (count) => {
  return {
    type: PAGINATION_UPDATE,
    payload: count,
  };
};
