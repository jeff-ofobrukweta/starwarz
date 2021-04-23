import { setLoading } from "../../../redux/loading/actions";
import Axios from "../../../util/axios/axios";
import { setPlanet } from "./actions";

export const getPlanet = (url) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await Axios.handleGetRequest(url);
      dispatch(setPlanet(data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(error));
      return error;
    }
  };
};
