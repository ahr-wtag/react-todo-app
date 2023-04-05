import {
  TOGGlE_CREATE_BUTTON_VISIBILITY,
  ADD_TASK,
  DELETE_TASK,
} from "store/constants";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
export const createButton = () => {
  return {
    type: TOGGlE_CREATE_BUTTON_VISIBILITY,
  };
};

export const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index,
  };
};
