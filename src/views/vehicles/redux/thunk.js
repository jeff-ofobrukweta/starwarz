import Axios from "../../../util/axios/axios";
import { setVehicles } from "./actions";

export const getVehicles = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setVehicles(data));
    } catch (error) {
      return error;
    }
  };
};
