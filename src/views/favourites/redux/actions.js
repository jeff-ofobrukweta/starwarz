import { GET_FAVOURITES, SET_FILM } from "./types";

export const getFavorite = () => {
  return {
    type: GET_FAVOURITES
  };
};