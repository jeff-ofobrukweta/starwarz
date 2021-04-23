import { SET_VEHICLE } from "./types";

export const setVehicle = (payload) => {
  return {
    type: SET_VEHICLE,
    payload,
  };
};
