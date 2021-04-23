import { SET_VEHICLES } from "./types";

export const setVehicles = (payload) => {
  return {
    type: SET_VEHICLES,
    payload,
  };
};
