import {SET_PLACES, SET_CURRENT_PLACE} from "./actions";


const initialState = {
  places: [],
  currentPlace: null,
};

const placeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PLACES:
      return {
        ...state,
        places: payload
      };

    case SET_CURRENT_PLACE:
      return {
        ...state,
        currentPlace: payload
      };

    default:
      return state;
  };
};

export default placeReducer;
