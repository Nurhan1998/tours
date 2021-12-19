import { combineReducers } from "redux";

import postsReducer from "./posts/reducer";
import placeReducer from "./places/reducer";
import toursReducer from "./tours/reducer";

const rootReducer = combineReducers({
    tours: toursReducer,
    posts: postsReducer,
    places: placeReducer
});

export default rootReducer;
