import { combineReducers } from "redux";
import todoReducer from "store/reducers/todoReducer.js";

import paginationReducer from "store/reducers/paginationReducer";
import searchReducer from "store/reducers/searchReducer";
import loadingReducer from "store/reducers/loadingReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  paginationLength: paginationReducer,
  searchText: searchReducer,
  loadingState: loadingReducer,
});

export default rootReducers;
