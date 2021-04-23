import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card";
import { dataFormat, getId } from "../../util/helpers";
import { getSpaceships } from "./redux/thunk";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { starship, spaceship } from "../../route";
import "./index.css";

const SpaceShips = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchSpaceships(userData);
  }
  useEffect(() => {
    handleAPICallToServer(starship);
  }, []);

  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllSpacehips?.results
              ? props.getAllSpacehips?.results.map((item, index) => (
                  <Card
                    withRateIcons={true}
                    item={{ ...item, type: spaceship }}
                    key={index}
                  >
                    <Link
                      className="card-link"
                      to={`/${spaceship}/${getId(item.url)}`}
                    >
                      <div className="character-header">
                        MANUFACTURER : {item.name}
                      </div>
                      <div className="character">
                        MANUFACTURER : {item.manufacturer}
                      </div>
                      <div className="character">MODEL : {item.model}</div>
                      <div className="character">CREW : {item.crew}</div>
                      <div className="character">
                        CAPACITY : {item.cargo_capacity}
                      </div>
                      <div className="character">
                        PRICE : {item.cost_in_credits}
                      </div>
                      <div className="character">
                        CREATED ON : {dataFormat(item.created)}
                      </div>
                    </Link>
                  </Card>
                ))
              : [1, 2, 3, 4, 5, 6].map((item) => <CardLoder key={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getAllSpacehips: state.spaceShipsReducer.spaceships,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpaceships: (payload) => dispatch(getSpaceships(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceShips);
