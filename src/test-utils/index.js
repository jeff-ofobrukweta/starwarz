import { mount } from "enzyme";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../redux/rootReducers";

export const testStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export const reduxify = (Component, props = {}, state = {}) => {
  return function reduxWrap() {
    return (
      <Provider store={testStore}>
          <Component {...props} />
      </Provider>
    );
  };
};


export const makeMountRender = (Component, defaultProps = {}) => {
  return (customProps = {}) => {
    const props = {
      ...defaultProps,
      ...customProps
    };
    return mount(<Component {...props} />);
  };
};


export const snapshotify = reactWrapper => {
  return reactWrapper.html();
};