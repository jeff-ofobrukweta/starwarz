import React from "react";
import Header from "./components/header";
import "./App.css";
import PropTypes from 'prop-types';

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App;
