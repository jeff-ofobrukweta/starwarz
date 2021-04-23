import { SET_FILM } from "./types";

const INITIAL_STATE = {
  film: {},
};

const filmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILM:
      return {
        ...state,
        film: action.payload,
      };
    default:
      return state;
  }
};

export default filmReducer;
