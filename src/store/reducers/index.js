import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";

import paginationReducer from "store/reducers/paginationReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  paginationLength: paginationReducer,
});

export default rootReducers;
