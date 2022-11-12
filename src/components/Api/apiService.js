import axios from 'axios';
const API_KEY = '30048771-b82027b1d1dd03684fe8fb9c0';
const QUANTITY = 12;
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = (query, page = 1) => {
  return axios.get(
    `/?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&language=en&per_page=${QUANTITY}&page=${page}`
  );
};
