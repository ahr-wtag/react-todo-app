import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";
import createButtonReducer from "store/reducers/createButtonReducer.js";
import editButtonReducer from "store/reducers/editButtonReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  createButton: createButtonReducer,
  editButton: editButtonReducer,
});

export default rootReducers;
