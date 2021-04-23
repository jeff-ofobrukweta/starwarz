import Axios from "../../../util/axios/axios";
import { setSpecie } from "./actions";

export const getSpecie = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setSpecie(data));
    } catch (error) {
      return error;
    }
  };
};
