import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkFavourite, handleToastChange } from "../../util/helpers";
import "./index.css";

const Card = (props) => {
  const { children, item, customClass, withRateIcons } = props;
  const check = item ? item : "";
  const [active, setActive] = useState(checkFavourite(check));
  const handleClickChange = () => {
    const text = !active ? "ADDED TO FAVOURITES" : "REMOVED FROM FAVOURITES";
    setActive(!active);
    handleToastChange(props, { active: true, text }, item, 1000);
  };

  return (
    <>
      <div className="characters-section">
        <div className="card-main-inner-container">
          {withRateIcons && (
            <div className="list-icon-card-main">
              <div className="icon-container-wrapper"></div>
              <div className="icon-container-wrapper"></div>
              <div
                className="icon-container-wrapper"
                onClick={handleClickChange}
              >
                {active ? (
                  <span className="fa fa-bookmark checked"></span>
                ) : (
                  <span className="fa fa-bookmark"></span>
                )}
              </div>
            </div>
          )}
          <div className="child-main-contain">{children}</div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  withRateIcons: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    toastOpen: state.toastReducer.toastOpen,
  };
};
export default connect(mapStateToProps, null)(Card);
