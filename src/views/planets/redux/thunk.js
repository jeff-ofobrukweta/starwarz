import { setLoading } from "../../../redux/loading/actions";
import Axios from "../../../util/axios/axios";
import { setPlanets } from "./actions";

export const getPlanets = (url) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.handleGetRequest(url);
      dispatch(setLoading(false))
      dispatch(setPlanets(data));
    } catch (error) {
      dispatch(setLoading(error))
      return error;
    }
  };
};
