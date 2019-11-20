import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const UPDATE_BREED = "UPDATE_BREED";

export const fetchDogs = breed => {
  return dispatch => {
    dispatch({ type: START_FETCHING });
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload: res.data.message });
      })
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };
};
