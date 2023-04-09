import { TOGGlE_EDIT_BUTTON_VISIBILITY } from "store/constants";

const initialState = null;
const editButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGlE_EDIT_BUTTON_VISIBILITY:
      return (state = action.payload);

    default:
      return state;
  }
};

export default editButtonReducer;
