import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ButtonComponent({
  handleSubmitAction,
  btnCustomClassName,
  innerTextBtn
}) {
  return (
    <>
      <input type="submit"
        onClick={handleSubmitAction}
        value={innerTextBtn}
        className={`btn ${btnCustomClassName}`} />
    </>
  )
}

ButtonComponent.propTypes = {
  btnCustomClassName: PropTypes.string.isRequired,
  innerTextBtn: PropTypes.string.isRequired,
  handleSubmitAction: PropTypes.func
}


export default ButtonComponent;