import { SET_FILMS } from "./types";

export const setFilms = (films) => {
  return {
    type: SET_FILMS,
    films,
  };
};
