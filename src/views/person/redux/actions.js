import { SET_PERSON } from "./types";

export const setPerson = (payload) => {
  return {
    type: SET_PERSON,
    payload,
  };
};
