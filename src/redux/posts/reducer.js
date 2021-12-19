import { SET_POSTS, SET_CURRENT_POST } from "./actions";

const initialState = {
  postsList: [],
  currentPost: null,
};

const postsReducer = (state= initialState, { type, payload }) => {
  switch(type) {
    case SET_POSTS:
      return {
        ...state,
        postsList:payload
      };

    case  SET_CURRENT_POST:
      return {
        ...state,
        currentPost: payload
      };

    default :
      return state
  }
};

export default postsReducer;
