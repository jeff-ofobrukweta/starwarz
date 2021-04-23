import { SET_SPECIE } from "./types";

export const setSpecie = (payload) => {
  return {
    type: SET_SPECIE,
    payload,
  };
};
