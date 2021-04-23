import { SET_PLANETS } from "./types";

const INITIAL_STATE = {
  planets: {},
};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return { ...state, planets: action.payload };
    default:
      return state;
  }
};

export default planetsReducer;
