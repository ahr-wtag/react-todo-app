import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import createButtonReducer from "./createButtonReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  createButton: createButtonReducer,
});

export default rootReducers;
