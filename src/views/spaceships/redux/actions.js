import { SET_SPACESHIPS } from "./types";

export const setSpaceships = (payload) => {
  return {
    type: SET_SPACESHIPS,
    payload,
  };
};
