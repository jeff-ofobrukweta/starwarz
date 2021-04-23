import Axios from "../../../util/axios/axios";
import { setSpecies } from "./actions";

export const getSpecies = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setSpecies(data));
    } catch (error) {
      return error;
    }
  };
};
