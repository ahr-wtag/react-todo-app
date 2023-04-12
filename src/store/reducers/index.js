import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";
import createButtonReducer from "store/reducers/createButtonReducer.js";

const rootReducers = combineReducers({
  todo: todoReducer,
  createButtonState: createButtonReducer,
});

export default rootReducers;
