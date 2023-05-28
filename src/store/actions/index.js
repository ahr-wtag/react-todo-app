import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from "store/constants";

export const addTask = (task) => {
  task.id = Date.now().toString();
  task.createdDate = new Date();
  task.completed = false;

  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});
