import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducers";

const loggerServiceModule =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk, logger))
    : null;
const store = createStore(
  rootReducer,
  loggerServiceModule
);

export default store;
