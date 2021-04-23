import { SET_VEHICLE } from "./types";

const INITIAL_STATE = {
  vehicle: {},
};

const vehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VEHICLE:
      return { ...state, vehicle: action.payload };
    default:
      return state;
  }
};

export default vehicleReducer;
