import { LOADING } from "./types";

export const setLoading = (payload) => {
  return {
    type: LOADING,
    payload,
  };
};