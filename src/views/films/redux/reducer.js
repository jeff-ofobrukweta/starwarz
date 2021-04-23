import { SET_FILMS } from "./types";

const INITIAL_STATE = {
  films: {},
};

const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, films: action.films };
    default:
      return state;
  }
};

export default filmsReducer;
