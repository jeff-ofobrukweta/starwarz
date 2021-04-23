import { SET_FILM } from "./types";

const INITIAL_STATE = {};

const filmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILM:
      return { ...state };
    default:
      return state;
  }
};

export default filmReducer;
