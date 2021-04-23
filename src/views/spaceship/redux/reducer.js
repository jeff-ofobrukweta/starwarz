import { SET_SPACESHIP } from "./types";

const INITIAL_STATE = {
  spaceship: {},
};

const spaceshipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPACESHIP:
      return { ...state, spaceship: action.payload };
    default:
      return state;
  }
};

export default spaceshipReducer;
