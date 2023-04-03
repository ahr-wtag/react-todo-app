import { CREATE_BUTTON } from "../constants";

const initialState = false;
const createButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BUTTON:
      state = !state;
      return state;

    default:
      return state;
  }
};

export default createButtonReducer;
