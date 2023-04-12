import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";
import createButtonReducer from "store/reducers/createButtonReducer.js";
import editButtonReducer from "store/reducers/editButtonReducer";
import paginationReducer from "store/reducers/paginationReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  createButtonState: createButtonReducer,
  editButton: editButtonReducer,
  paginationLength: paginationReducer,
});

export default rootReducers;
