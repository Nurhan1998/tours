import axios from "axios";

import { API } from "./index";

export const getPlaces = () => axios.get(`${API}/places/`);

export const getPlaceById = (id) => axios.get(`${API}/places/${id}`);
