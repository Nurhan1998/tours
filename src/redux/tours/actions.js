export const SET_TOURS = "SET_TOURS";
export const SET_CURRENT_TOUR = "SET_CURRENT_TOUR";
export const SET_TOP_TOURS = "SET_TOP_TOURS";
export const SET_CURRENT_TOUR_REVIEW = "SET_CURRENT_TOUR_REVIEW";
export const SET_REVIEWS = "SET_REVIEWS";

export const setTours = (tours) => {
  return {
    type: SET_TOURS,
    payload: tours
  };
};

export const setCurrentTour = (data) => {
  return {
    type: SET_CURRENT_TOUR,
    payload: data
  };
};

export const setTopTours = (tours) => {
  return {
    type: SET_TOP_TOURS,
    payload: tours
  };
};

export const setCurrentTourReview = (data) => {
  return {
    type: SET_CURRENT_TOUR_REVIEW,
    payload: data
  };
};

export const setReview = (data) => {
  return {
    type: SET_REVIEWS,
    payload: data,
  };
};
