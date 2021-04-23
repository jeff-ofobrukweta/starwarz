import { ADDED_TO_FAVOURITES, SET_ACTIVE } from "./types";

const INITIAL_STATE = {
  toastOpen: false,
  toastText: ADDED_TO_FAVOURITES,
};

const toastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        toastOpen: action.payload.active,
        toastText: action.payload.text || ADDED_TO_FAVOURITES,
      };
    default:
      return state;
  }
};

export default toastReducer;
