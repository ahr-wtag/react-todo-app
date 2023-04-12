import {
  TOGGlE_CREATE_BUTTON_VISIBILITY,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  TOGGlE_EDIT_BUTTON_VISIBILITY,
  PAGINATION_UPDATE,
} from "store/constants";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
export const toggleCreateButtonVisibility = () => {
  return {
    type: TOGGlE_CREATE_BUTTON_VISIBILITY,
  };
};

export const editButton = (index) => {
  return {
    type: TOGGlE_EDIT_BUTTON_VISIBILITY,
    payload: index,
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
