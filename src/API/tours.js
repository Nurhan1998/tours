import axios from 'axios';

import { API } from "./index";

export const getTours = () => axios.get(`${API}/tours`);

export const getTopTours = () => axios.get(`${API}/top_tours`);

export const getTourById = (id) => axios.get(`${API}/tours/${id}`);

export const getTourReviews = (id) => axios.get(`${API}/tours/${id}/reviews`);

export const getTourReviewById = (id, reviewId) => axios.get(`${API}/tours/${id}/reviews${reviewId}`);

export const addTourReview = (tourId) => axios.post(`${API}/tours/${tourId}/reviews`);

export const editTourReview = (tourId, reviewId) => axios.patch(`${API}/tours/${tourId}/reviews/${reviewId}`);

export const deleteTourReview = (tourId, reviewId) => axios.delete(`${API}/tours/${tourId}/reviews/${reviewId}`);
