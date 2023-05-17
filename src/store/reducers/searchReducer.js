import { SEARCH_TASK } from "store/constants";

const initialState = "";
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TASK:
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchReducer;
