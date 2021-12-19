import {SET_CURRENT_TOUR, SET_CURRENT_TOUR_REVIEW, SET_REVIEWS, SET_TOP_TOURS, SET_TOURS} from "./actions";

const initialState = {
  tours: [],
  top_tours: [],
  reviews: [],
  currentTour: null,
  currentTourReview: null,
};

const toursReducer = (state= initialState, {type, payload}) => {
  switch(type) {
    case SET_TOURS:
      return {
        ...state,
        tours: payload
      };
    case SET_CURRENT_TOUR:
      return {
        ...state,
        currentTour: payload
      };
    case SET_TOP_TOURS:
      return {
        ...state,
        top_tours: payload
      };
    case SET_CURRENT_TOUR_REVIEW:
      return {
        ...state,
        currentTourReview: payload
      }
    case SET_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    default :
      return state
  }
};

export default toursReducer;
