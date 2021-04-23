import { LOADING } from "./types";

const INITIAL_STATE = {
  loading: true,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
