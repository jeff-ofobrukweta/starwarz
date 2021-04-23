import Axios from "../../../util/axios/axios";
import { setVehicle } from "./actions";

export const getVehicle = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setVehicle(data));
    } catch (error) {
      return error;
    }
  };
};
