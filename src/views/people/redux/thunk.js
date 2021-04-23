import { setLoading } from "../../../redux/loading/actions";
import Axios from "../../../util/axios/axios";
import { setPeople } from "./actions";

export const getPeople = (url) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.handleGetRequest(url);
      dispatch(setPeople(data));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(err));
      return err;
    }
  };
};
