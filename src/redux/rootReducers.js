import { combineReducers } from "redux";
import filmReducer from "../views/film/redux/reducer";
import filmsReducer from "../views/films/redux/reducer";
import peopleReducer from "../views/people/redux/reducer";
import personReducer from "../views/person/redux/reducer";
import planetReducer from "../views/planet/redux/reducer";
import planetsReducer from "../views/planets/redux/reducer";
import spaceshipReducer from "../views/spaceship/redux/reducer";
import spaceShipsReducer from "../views/spaceships/redux/reducer";
import specieReducer from "../views/specie/redux/reducer";
import speciesReducer from "../views/species/redux/reducer";
import vehicleReducer from "../views/vehicle/redux/reducer";
import vehiclesReducer from "../views/vehicles/redux/reducer";
import loadingReducer from "./loading/reducer";
import toastReducer from "../components/card/redux/reducer";
import favouritesReducer from "../views/favourites/redux/reducer";
import headerReducer from "../components/header/redux/reducer";
const rootReducer = combineReducers({
  filmReducer,
  filmsReducer,
  peopleReducer,
  personReducer,
  planetReducer,
  planetsReducer,
  spaceshipReducer,
  spaceShipsReducer,
  specieReducer,
  speciesReducer,
  vehicleReducer,
  vehiclesReducer,
  loadingReducer,
  toastReducer,
  favouritesReducer,
  headerReducer,
});
export default rootReducer;
