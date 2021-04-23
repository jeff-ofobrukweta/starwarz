import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { getSpaceship } from "./redux/thunk";
import { starship, spaceship, person, film } from "../../route";
import "./index.css";
import {
  dataFormat,
  getId,
  checkFavourite,
  handleToastChange,
} from "../../util/helpers";

const SpaceShip = (props) => {
  const [active, setActive] = useState(false);
  async function handleAPICallToServer(userData) {
    await props.fetchSpaceship(userData);
  }
  const handleClickChange = () => {
    const text = !active ? "ADDED TO FAVOURITES" : "REMOVED FROM FAVOURITES";
    setActive(!active);
    handleToastChange(
      props,
      { active: true, text },
      { ...props.getOneSpaceShip, type: spaceship },
      1000
    );
  };
  useEffect(() => {
    handleAPICallToServer(`${starship}/${props.match?.params?.id}`);
  }, []);

  return (
    <>
      <div className="films-page">
        {props.getOneSpaceShip.name && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">
                {props.getOneSpaceShip && props.getOneSpaceShip.name}
              </div>
              <div className="film-description">
                <div className="cargo_capacity">
                  Cargo&nbsp;Capacity&nbsp;:
                  {props.getOneSpaceShip.cargo_capacity}
                </div>
                <div className="consumables">
                  consumables&nbsp;{props.getOneSpaceShip.consumables}
                </div>
                <div className="cost_in_credits">
                  Cost&nbsp;In&nbsp;Credits&nbsp;:
                  {props.getOneSpaceShip.cost_in_credits}
                </div>
                <div className="crew">
                  Crew&nbsp;: {props.getOneSpaceShip.crew}
                </div>
                <div className="passengers">
                  Passengers&nbsp;On&nbsp;:{props.getOneSpaceShip.passengers}
                </div>
                <div className="mglt">
                  MGLT&nbsp;:{props.getOneSpaceShip.MGLT}
                </div>
                <div className="length">
                  Length&nbsp;:{props.getOneSpaceShip.length}
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="rating-wrapper-contain">
                Rate:
                {checkFavourite(props.getOneSpaceShip) ? (
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
              <div className="hyperdrive_rating">
                Hyperdrive&nbsp;Rating&nbsp;:
                {props.getOneSpaceShip.hyperdrive_rating}
              </div>
              <div className="max_atmosphering_speed">
                Max&nbsp;Atmosphering&nbsp;Speed&nbsp;:
                {props.getOneSpaceShip.max_atmosphering_speed}
              </div>
              <div className="model">
                Model&nbsp;:
                {props.getOneSpaceShip.model}
              </div>
              <div className="starship_class">
                Starship&nbsp;Class&nbsp;:
                {props.getOneSpaceShip.starship_class}
              </div>
              <div className="url">
                URL&nbsp;:&nbsp;
                {props.getOneSpaceShip.url}
              </div>
              <div className="edited">
                Edited&nbsp;: {dataFormat(props.getOneSpaceShip.edited)}
              </div>
              <div className="created-date">
                Created&nbsp;On&nbsp;:
                {dataFormat(props.getOneSpaceShip.created)}
              </div>
            </div>
          </div>
        )}
        <div className="details-wrapper">
          <div className="details-wrapper">
            {props.getOneSpaceShip.pilots ? (
              <Card>
                <div className="character-header">Pilots</div>
                {props.getOneSpaceShip.pilots.length ? (
                  props.getOneSpaceShip.pilots.map((item, index) => (
                    <div key={index} className="character">
                      <Link to={`/${person}/${getId(item)}`}>{item}</Link>
                    </div>
                  ))
                ) : (
                  <div className="purple-text">
                    THIS STARSHIP CURRENTLY HAS NO PILOTS
                  </div>
                )}
              </Card>
            ) : (
              <CardLoder />
            )}
            {props.getOneSpaceShip.films ? (
              <Card>
                <div className="character-header">Films</div>
                {props.getOneSpaceShip.films.length ? (
                  props.getOneSpaceShip.films.map((item, index) => (
                    <div key={index} className="character">
                      <Link to={`/${film}/${getId(item)}`}>{item}</Link>
                    </div>
                  ))
                ) : (
                  <div className="purple-text">
                    THIS STARSHIP HAS NOT BE FEATURED IN ANY MOVIE
                  </div>
                )}
              </Card>
            ) : (
              <CardLoder />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getOneSpaceShip: state.spaceshipReducer.spaceship,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpaceship: (payload) => dispatch(getSpaceship(payload)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceShip);
