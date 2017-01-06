import axios from 'axios';

const API_URL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

export function fetchQuote() {
  const request = axios.get(API_URL);

  return {
    type: "FETCH_QUOTE",
    payload: request
  };
};
