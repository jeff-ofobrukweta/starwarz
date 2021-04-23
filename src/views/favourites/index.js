import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { getId } from "../../util/helpers";
import "./index.css";

const Favourites = ({ favourites }) => {
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {favourites.length && favourites.length ? (
              favourites.map((item, index) => (
                <Card withRateIcons={true} item={item} key={item.url}>
                  <Link
                    className="card-link"
                    to={`${item.type}/${getId(item.url)}`}
                  >
                    <div className="character-header">{item.type}</div>
                    <div className="character">
                      NAME : {item.name || item.title}
                    </div>
                  </Link>
                </Card>
              ))
            ) : (
              <div>
                <div className="warning-area">
                  PLEASE YOU HAVE NOT YET ADDED ANYTHING TO YOUR FAVOURITES
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    favourites: state.favouritesReducer.favourites,
  };
};
export default connect(mapStateToProps, null)(Favourites);
