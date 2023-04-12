import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";
import editButtonReducer from "store/reducers/editButtonReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  editButton: editButtonReducer,
});

export default rootReducers;
