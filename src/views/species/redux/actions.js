import { SET_SPECIES } from "./types";

export const setSpecies = (payload) => {
  return {
    type: SET_SPECIES,
    payload,
  };
};
