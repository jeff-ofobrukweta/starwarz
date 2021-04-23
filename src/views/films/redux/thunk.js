import { setLoading } from "../../../redux/loading/actions";
import Axios from "../../../util/axios/axios";
import { setFilms } from "./actions";

export const getFilms = (url) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.handleGetRequest(url);
      dispatch(setFilms(data));
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      return error;
    }
  };
};
