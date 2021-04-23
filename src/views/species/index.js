import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { getId } from "../../util/helpers";
import { getSpecies } from "./redux/thunk";
import { specie, species } from "../../route";

const Species = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchSpecies(userData);
  }
  useEffect(() => {
    handleAPICallToServer(species);
  }, []);

  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllSpecies?.results
              ? props?.getAllSpecies.results.map((item, index) => (
                  <Card
                    withRateIcons={true}
                    item={{ ...item, type: species }}
                    key={index}
                  >
                    <Link
                      className="card-link"
                      to={`/${specie}/${getId(item.url)}`}
                    >
                      <div className="character-header">{item.name}</div>
                      <div className="character">
                        CLASSIFICATION : {item.classification}
                      </div>
                      <div className="character">
                        DESIGNATION : {item.designation}
                      </div>
                      <div className="character">
                        LANGUAGE : {item.language}
                      </div>
                      <div className="character">
                        AVERAGE HEIGHT : {item.average_height}
                      </div>
                      <div className="character">
                        AVERAGE LIFE-SPAN {item.average_lifespan}
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
    getAllSpecies: state.speciesReducer.species,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecies: (payload) => dispatch(getSpecies(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Species);
