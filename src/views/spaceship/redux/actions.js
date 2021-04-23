import { SET_SPACESHIP } from "./types";

export const setSpaceship = (payload) => {
  return {
    type: SET_SPACESHIP,
    payload,
  };
};
