import { PAGINATION_UPDATE } from "store/constants";
import { PAGINATION_LIMIT } from "utils/constant/form";

const initialState = PAGINATION_LIMIT;
const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGINATION_UPDATE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default paginationReducer;
