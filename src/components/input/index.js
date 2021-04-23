import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function SEARCHCOMPONENT({
  htmlFor,
  labelCustomClass,
  innerTextLabel,
  inputCustomClass,
  InputType,
  placeHolder,
  change,
}) {
  return (
    <>
      <input
        className={`${inputCustomClass} search-input-text catalog-search-bar`}
        type={InputType}
        placeholder={placeHolder}
        onChange={change}
      />
    </>
  );
}

SEARCHCOMPONENT.propTypes = {
  btnCustomClassName: PropTypes.string,
  innerTextBtn: PropTypes.string,
  handleSubmitAction: PropTypes.func,
};

export default SEARCHCOMPONENT;
