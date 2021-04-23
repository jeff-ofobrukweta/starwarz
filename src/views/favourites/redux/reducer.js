import { getFavourites } from "../../../util/helpers";
import { GET_FAVOURITES } from "./types";
const INITIAL_STATE = {
  favourites: getFavourites(),
};

const favouritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FAVOURITES:
      return {
        ...state,
        favourites: getFavourites(),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
