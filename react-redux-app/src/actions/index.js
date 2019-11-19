import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchDogs = dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(res => console.log(res))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
