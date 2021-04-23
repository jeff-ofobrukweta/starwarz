import { SET_ACTIVE } from "../components/card/redux/types";
import { getFavorite } from "../views/favourites/redux/actions";
import { GET_FAVOURITES } from "../views/favourites/redux/types";

export const dataFormat = (input) => {
  const date = new Date(input);
  return [
    ("0" + date.getDate()).slice(-2),
    ("0" + (date.getMonth() + 1)).slice(-2),
    date.getFullYear(),
  ].join("/");
};

export const getId = (input) => {
  const list = input.split("/");
  return list[list.length - 2];
};

export const favouitesHandler = (url, props) => {
  const favourite = localStorage.getItem("favourites");
  const favourites = JSON.parse(favourite);
  let fav = [];
  if (favourites === null) {
    fav.push(url);
    localStorage.setItem("favourites", JSON.stringify(fav));
    props.dispatch(getFavorite());
    return;
  }
  let push = true;
  favourites.forEach((element) => {
    if (element.url !== url.url) {
      fav.push(element);
    }
    if (element.url === url.url) {
      push = false;
    }
  });
  if (push) fav = [...fav, url];
  localStorage.setItem("favourites", JSON.stringify(fav));
  props.dispatch(getFavorite());
};

export const checkFavourite = (item) => {
  const favourite = localStorage.getItem("favourites");
  const favourites = JSON.parse(favourite);
  if (favourites === null) {
    return false;
  }
  if (favourites.length === 0) {
    return false;
  }
  let push = false;
  favourites.forEach((element) => {
    if (element.url === item.url) {
      push = true;
    }
  });
  if (push) {
    return true;
  } else {
    return false;
  }
};

export const getFavourites = () => {
  const favourite = localStorage.getItem("favourites");
  const favourites = JSON.parse(favourite);
  if (favourites === null) {
    return [];
  }
  return favourites;
};

export const handleToastChange = (
  props,
  payload,
  itemToChange,
  timer = 1000
) => {
  props.dispatch({ type: SET_ACTIVE, payload });
  favouitesHandler(itemToChange, props);
  setTimeout(() => {
    props.dispatch({
      type: SET_ACTIVE,
      payload: { ...payload, active: false },
    });
  }, timer);
};
