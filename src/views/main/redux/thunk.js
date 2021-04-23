import Axios from "../../../util/axios/axios";
import { setFilm } from "./actions";

export const getFilm = () => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest("/film");
      // dispatch(setLoading)
      dispatch(setFilm(data));
    } catch (error) {
      return error;
    }
  };
};
