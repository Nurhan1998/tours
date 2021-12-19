export const SET_PLACES = "SET_PLACES";
export const SET_CURRENT_PLACE = "SET_CURRENT_PLACE";

export const setPlaces = (places) => {
  return {
    type: SET_PLACES,
    payload: places
  };
};

export const setCurrentPlace = (place) => {
  return {
    type: SET_CURRENT_PLACE,
    payload: place
  };
};
