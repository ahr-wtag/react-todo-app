import { TOGGlE_CREATE_BUTTON_VISIBILITY } from "store/constants";

const initialState = false;
const createButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGlE_CREATE_BUTTON_VISIBILITY:
      return !state;

    default:
      return state;
  }
};

export default createButtonReducer;
