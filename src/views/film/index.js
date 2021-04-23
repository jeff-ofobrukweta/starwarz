import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "../../components/card/index";
import { getFilm } from "./redux/thunk";
import {
  getId,
  checkFavourite,
  favouitesHandler,
  handleToastChange,
} from "../../util/helpers";
import {
  films,
  specie,
  vehicles,
  spaceship,
  planet,
  film,
  person,
} from "../../route";
import "./index.css";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";

const Film = (props) => {
  const [active, setActive] = useState(false);
  const handleAPICallToServer = async (userData) => {
    await props.fetchFilm(userData);
  };

  const handleClickChange = () => {
    const text = !active ? "ADDED TO FAVOURITES" : "REMOVED FROM FAVOURITES";
    setActive(!active);
    handleToastChange(
      props,
      { active: true, text },
      { ...props.getFilm, type: film },
      1000
    );
  };

  useEffect(() => {
    handleAPICallToServer(`${films}/${props.match?.params?.id}`);
  }, []);

  return (
    <>
      <div className="films-page">
        {!props.getLoader && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">{props.getFilm?.title}</div>
              <div className="film-description">
                {props.getFilm?.opening_crawl}
              </div>
            </div>
            <div className="right-section">
              <div className="rating-wrapper-contain">
                Rate:
                {checkFavourite(props.getFilm) ? (
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
              <div className="episode_id">
                Episode&nbsp;ID&nbsp;: {props.getFilm.episode_id}
              </div>
              <div className="director">
                Director&nbsp;: {props.getFilm?.director}
              </div>
              <div className="producer">
                Producer&nbsp;: {props.getFilm.producer}
              </div>
            </div>
          </div>
        )}
        <div className="details-wrapper">
          {props.getFilm.species && !props.getLoader ? (
            <Card>
              <div className="character-header">Species</div>
              {props.getFilm.species.length ? (
                props.getFilm.species.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${specie}/${getId(item)}`}>{item}</Link>
                  </div>
                ))
              ) : (
                <div className="purple-text">
                  PLEASE THERE IS CURRENTLY NO SPECIE ASSIGNED TO THIS FILM
                </div>
              )}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.vehicles && !props.getLoader ? (
            <Card>
              <div className="character-header">Vehicles</div>
              {props.getFilm.vehicles.length ? (
                props.getFilm.vehicles.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${vehicles}/${getId(item)}`}>{item}</Link>
                  </div>
                ))
              ) : (
                <div className="purple-text">
                  PLEASE THERE IS CURRENTLY NO VEHICLE ASSIGNED TO THIS FILM
                </div>
              )}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.starships && !props.getLoader ? (
            <Card>
              <div className="character-header">Starships</div>
              {props.getFilm.starships.length ? (
                props.getFilm.starships.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${spaceship}/${getId(item)}`}>{item}</Link>
                  </div>
                ))
              ) : (
                <div className="purple-text">
                  PLEASE THERE IS CURRENTLY NO STARSHIP ASSIGNED TO THIS FILM
                </div>
              )}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.planets && !props.getLoader ? (
            <Card>
              <div className="character-header">Planets</div>
              {props.getFilm.planets.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${planet}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.characters && !props.getLoader ? (
            <Card>
              <div className="character-header">Characters</div>
              {props.getFilm.characters.length ? (
                props.getFilm.characters.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${person}/${getId(item)}`}>{item}</Link>
                  </div>
                ))
              ) : (
                <div className="purple-text">
                  PLEASE THERE IS CURRENTLY NO PERSON ON THIS FILM
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

Film.propTypes = {
  children: PropTypes.element,
};

const mapStateToProps = (state) => {
  return {
    getFilm: state.filmReducer.film,
    getLoader: state.loadingReducer.loading,
    toastOpen: state.toastReducer.toastOpen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilm: (payload) => dispatch(getFilm(payload)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
