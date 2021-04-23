import { SET_FILM } from "./types";

export const setFilm = (payload) => {
  return {
    type: SET_FILM,
    payload,
  };
};
