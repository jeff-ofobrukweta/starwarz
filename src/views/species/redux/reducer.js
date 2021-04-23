import { SET_SPECIES } from "./types";

const INITIAL_STATE = {
  species: {},
};

const speciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return { ...state, species: action.payload };
    default:
      return state;
  }
};

export default speciesReducer;
