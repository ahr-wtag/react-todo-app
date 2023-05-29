import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";

const rootReducers = combineReducers({
  todo: todoReducer,
});

export default rootReducers;
