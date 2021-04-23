import { SET_PEOPLE } from "./types";

export const setPeople = (payload) => {
  return {
    type: SET_PEOPLE,
    payload,
  };
};
