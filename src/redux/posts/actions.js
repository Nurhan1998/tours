export const SET_CURRENT_POST = "SET_CURRENT_POST";
export const SET_POSTS = "SET_POSTS";

export const getPosts = (data) => {
  return {
    type: SET_POSTS,
    payload: data,
  };
};

export const getPostById = (data) => {
  return {
    type: SET_CURRENT_POST,
    payload: data,
  };
};
