import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { dataFormat, getId } from "../../util/helpers";
import { getFilms } from "./redux/thunk";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { film, films } from "../../route";
import "./index.css";

const FilmList = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchFilms(userData);
  }
  useEffect(() => {
    handleAPICallToServer(films);
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllFilms?.results && !props.getLoader
              ? props.getAllFilms.results.map((item, index) => (
                  <Card
                    withRateIcons={true}
                    key={index}
                    item={{ ...item, type: film }}
                  >
                    <Link
                      className="card-link"
                      to={`/${film}/${getId(item?.url)}`}
                    >
                      <div className="character-header">{item?.title}</div>
                      <div className="character">{item?.opening_crawl}</div>
                      <div className="footer-container">
                        <div className="footer-main-item">
                          <span className="label-span">Created:</span>
                          {dataFormat(item?.created)}
                        </div>
                        <div className="footer-main-item">
                          <span className="label-span">Director:</span>
                          {item?.director}
                        </div>
                        <div className="footer-main-item">
                          <span className="label-span">Producer:</span>
                          {item?.producer}
                        </div>
                        <div className="footer-main-item">
                          <span className="label-span">Episode&nbsp;ID:</span>4
                        </div>
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
    getAllFilms: state.filmsReducer.films,
    getLoader: state.loadingReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilms: (payload) => dispatch(getFilms(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
