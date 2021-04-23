import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPeople } from "./redux/thunk";
import { getId } from "../../util/helpers";
import Card from "../../components/card";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { people, person } from "../../route";
import "./index.css";

const People = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchPeople(userData);
  }
  useEffect(() => {
    handleAPICallToServer(people);
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllPeople?.results && !props.getLoader
              ? props.getAllPeople?.results.map((item, index) => (
                  <Card
                    withRateIcons={true}
                    item={{ ...item, type: person }}
                    key={index}
                  >
                    <Link
                      className="card-link"
                      to={`/${person}/${getId(item.url)}`}
                    >
                      <div className="character-header">{item.name}</div>
                      <div className="character">
                        <span>GENDER:</span>
                        <span className="key-value">{item.gender}</span>
                      </div>
                      <div className="character">
                        <span>BORN ON:</span>
                        <span className="key-value">{item.birth_year}</span>
                      </div>
                      <div className="character">
                        <span>HEIGHT:</span>
                        <span className="key-value">{item.height}</span>
                      </div>
                      <div className="character">
                        <span>HAIR&nbsp;COLOR:</span>
                        <span className="key-value">{item.hair_color}</span>
                      </div>

                      <div className="character">
                        <span>SKIN&nbsp;COLOR:</span>
                        <span className="key-value">{item.skin_color}</span>
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
    getAllPeople: state.peopleReducer.people,
    getLoader: state.loadingReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: (payload) => dispatch(getPeople(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
