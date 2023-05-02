import { v1 as uuidv1 } from "uuid";
import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  PAGINATION_UPDATE,
  SEARCH_TASK,
  LOADING,
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

export const completeTask = (index) => {
  return {
    type: COMPLETE_TASK,
    payload: index,
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

export const searchTask = (text) => {
  return {
    type: SEARCH_TASK,
    payload: text,
  };
};
export const loadingState = (state) => {
  return {
    type: LOADING,
    payload: state,
  };
};
