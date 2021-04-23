import { SET_PERSON } from "./types";

const INITIAL_STATE = {
  person: {},
};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PERSON:
      return { ...state, person: action.payload };
    default:
      return state;
  }
};

export default personReducer;
