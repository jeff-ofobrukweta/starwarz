import React from "react";
import "./index.css";

const CardLoder = () => {
  return (
    <>
      <div className="loading-characters-section loading-skelecton">
        <div className="loader-card-main-inner-container">
          <div className="list-icon-card-main">
            <div className="icon-container-wrapper icon-holder-loading-skelecton"></div>
            <div className="icon-container-wrapper icon-holder-loading-skelecton"></div>
            <div className="icon-container-wrapper icon-holder-loading-skelecton"></div>
          </div>
          <div className="child-main-contain">
            <div className="holder-title-main icon-holder-loading-skelecton"></div>
            <div className="holder-sub-title-main icon-holder-loading-skelecton"></div>
            <div className="holder-sub-title-main"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLoder;
