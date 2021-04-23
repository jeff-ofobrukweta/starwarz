import { setLoading } from "../../../redux/loading/actions";
import Axios from "../../../util/axios/axios";
import { setPerson } from "./actions";

export const getPerson = (url) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await Axios.handleGetRequest(url);
      dispatch(setPerson(data));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(err));
      return err;
    }
  };
};
