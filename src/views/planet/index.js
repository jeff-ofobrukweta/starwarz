import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { getPlanet } from "./redux/thunk";
import { planets, planet, film, person } from "../../route";
import "./index.css";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import {
  dataFormat,
  getId,
  checkFavourite,
  handleToastChange,
} from "../../util/helpers";

const Planet = (props) => {
  const [active, setActive] = useState(false);
  async function handleAPICallToServer(userData) {
    await props.fetchPlanet(userData);
  }
  const handleClickChange = () => {
    const text = !active ? "ADDED TO FAVOURITES" : "REMOVED FROM FAVOURITES";

    setActive(!active);
    handleToastChange(
      props,
      { active: true, text },
      { ...props.getOnePlanet, type: planet },
      1000
    );
  };
  useEffect(() => {
    handleAPICallToServer(`${planets}/${props.match.params.id}`);
  }, []);
  return (
    <>
      <div className="films-page">
        {!props.getLoader && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">{props.getOnePlanet?.name}</div>
              <div className="film-description">
                <div className="climate">
                  Climate&nbsp;: {props.getOnePlanet?.climate}
                </div>
                <div className="diameter">
                  Diameter: {props.getOnePlanet?.diameter}
                </div>
                <div className="gravity">
                  Gravity:&nbsp;{props.getOnePlanet?.gravity}
                </div>
                <div className="orbital_period">
                  Orbital&nbsp;Period:&nbsp;{props.getOnePlanet?.orbital_period}
                </div>
                <div className="created">
                  Created:&nbsp;{dataFormat(props.getOnePlanet?.created)}
                </div>
                <div className="edited">
                  Edited:{dataFormat(props.getOnePlanet?.edited)}
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="rating-wrapper-contain">
                Rate:
                {checkFavourite(props?.getOnePlanet) ? (
                  <span
                    onClick={handleClickChange}
                    className="fa fa-bookmark checked"
                  ></span>
                ) : (
                  <span
                    onClick={handleClickChange}
                    className="fa fa-bookmark"
                  ></span>
                )}
              </div>
              <div className="climate">
                Climate&nbsp;: {props.getOnePlanet?.climate}
              </div>
              <div className="surface_water">
                Surface Water: {props.getOnePlanet?.surface_water}
              </div>
              <div className="terrain">
                Terrain:&nbsp;{props.getOnePlanet?.terrain}
              </div>
              <div className="terrain">
                <div title="URL" className="svg-div">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="link"
                    className="svg-inline--fa fa-link fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                    ></path>
                  </svg>
                </div>
                :&nbsp;
                <Link to={`/${planet}/${props.match.params.id}`}>
                  {props.getOnePlanet.url}
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="details-wrapper">
          {props.getOnePlanet?.films && !props.getLoader ? (
            <Card>
              <div className="character-header">Films</div>
              {props.getOnePlanet.films.length ? (
                props.getOnePlanet.films.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${film}/${getId(item)}`}>{item}</Link>
                  </div>
                ))
              ) : (
                <div className="purple-text">
                  THIS PLANET DOES NO HAVE ANY FILMS
                </div>
              )}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getOnePlanet?.residents && !props.getLoader ? (
            <Card>
              <div className="character-header">Residents</div>
              {props.getOnePlanet?.residents.length ? (
                props.getOnePlanet?.residents.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${person}/${getId(item)}`}>{item}</Link>
                  </div>
                ))
              ) : (
                <div className="purple-text">
                  THIS PLANET DOES NOT HAVE ANY RESIDENT
                </div>
              )}
            </Card>
          ) : (
            <CardLoder />
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getOnePlanet: state.planetReducer.planet,
    getLoader: state.loadingReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanet: (payload) => dispatch(getPlanet(payload)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
