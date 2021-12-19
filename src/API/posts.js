import axios from 'axios';

import { API } from "./index";

export const getPosts = () => axios.get(`${API}/posts`);

export const getPostById = (id) => axios.get(`${API}/posts/${id}`);
