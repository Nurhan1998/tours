import axios from "axios";

import { API } from "./index";

export const postMessage = (data) => axios.post(`${API}/message`, data);
