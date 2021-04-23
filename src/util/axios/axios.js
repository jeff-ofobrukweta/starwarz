import API from "./axios.default.config";

class Axios {
  static handleGetRequest = async (payload) => {
    try {
      const response = await API.get(payload);
      console.log(response);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  static handlePostRequest = async (path, payload) => {
    try {
      const { data } = await API.post(path, payload);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };
  static handleDeleteRequest = async (path, payload) => {
    try {
      const { data } = await API.delete(path, payload);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };
}

export default Axios;
