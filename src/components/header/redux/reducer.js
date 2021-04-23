import { SET_NAV } from "./types";

const INITIAL_STATE = {
  open: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAV:
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
};

export default headerReducer;
