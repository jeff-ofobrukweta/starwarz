import Axios from "../../../util/axios/axios";
import { setSpaceship } from "./actions";

export const getSpaceship = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setSpaceship(data));
    } catch (error) {
      return error;
    }
  };
};
