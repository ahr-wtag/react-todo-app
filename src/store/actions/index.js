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

export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};

export const paginationUpdate = (count) => {
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
