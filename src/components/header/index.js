import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NavLink from "../../compositions/navLink";
import "./index.css";
import StarWarsLogo from "../../Asset/image/starwarslogo.png";
import { SET_NAV } from "./redux/types";

import {
  favouriteRoute,
  filmsRoute,
  homeRoute,
  peoplesRoute,
  planetsRoute,
  spaceShipsRoute,
  speciesRoute,
  vehiclesRoute,
} from "../../route";
import { useLocation } from "react-router";

const Header = (props) => {
  const [navLink, setnavLink] = useState([
    {
      path: homeRoute,
      id: 1,
      title: "HOME",
    },
    {
      path: planetsRoute,
      id: 2,
      title: "PLANETS",
    },
    {
      path: peoplesRoute,
      id: 3,
      title: "PEOPLE",
    },
    {
      path: filmsRoute,
      id: 4,
      title: "FILMS",
    },
    {
      path: vehiclesRoute,
      id: 5,
      title: "VEHICLES",
    },
    {
      path: speciesRoute,
      id: 6,
      title: "SPECIES",
    },
    {
      path: spaceShipsRoute,
      id: 7,
      title: "SPACESHIPS",
    },
    {
      path: favouriteRoute,
      id: 8,
      title: "FAVOURITES",
    },
  ]);
  const usedLocation = useLocation();
  const [location, setLocation] = useState(usedLocation.pathname);

  const toggleOpen = () => {
    props.dispatch({ type: SET_NAV, payload: !props.openNav });
  };

  useEffect(() => {
    if (location !== usedLocation.pathname) {
      props.dispatch({ type: SET_NAV, payload: false });
      setLocation(usedLocation.pathname);
    }
  }, []);
  return (
    <>
      {props.toaster.toastOpen && (
        <div className={`notify-pops ${props.toaster.toastOpen ? "show" : ""}`}>
          {props.toaster.toastText}
        </div>
      )}
      <div className="navbar">
        <div className="header-section-wrapper-top-main-md">
          <div className="image-area">
            <img className="starwars-logo" src={StarWarsLogo} alt="LOGO" />
          </div>
          <button
            onClick={toggleOpen}
            className="Header-link btn-link js-details-target"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <svg
              height="24"
              className="octicon octicon-three-bars"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="wrapper-dropdown-wrapper">
          <div className={`navigation-area ${props.openNav ? "open" : ""}`}>
            {navLink.map((item, index) => (
              <div key={index} className="nav-link">
                <NavLink
                  key={index}
                  activeClassName="is-nav-active"
                  className="link-list-item"
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    toaster: state.toastReducer,
    openNav: state.headerReducer.open,
  };
};
export default connect(mapStateToProps, null)(Header);
