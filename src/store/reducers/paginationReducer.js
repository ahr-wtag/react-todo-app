import { PAGINATION_UPDATE } from "store/constants";
import { PAGINATION } from "utils/constant/form";

const initialState = PAGINATION;
const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGINATION_UPDATE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default paginationReducer;
