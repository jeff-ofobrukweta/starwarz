import { SET_PLANETS } from "./types";

export const setPlanets = (payload) => {
  return {
    type: SET_PLANETS,
    payload,
  };
};
