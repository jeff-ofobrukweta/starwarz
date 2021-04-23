import Axios from "../../../util/axios/axios";
import { setSpaceships } from "./actions";

export const getSpaceships = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setSpaceships(data));
    } catch (error) {
      return error;
    }
  };
};
