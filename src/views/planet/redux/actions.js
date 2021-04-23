import { SET_PLANET } from "./types";

export const setPlanet = (payload) => {
  return {
    type: SET_PLANET,
    payload,
  };
};
