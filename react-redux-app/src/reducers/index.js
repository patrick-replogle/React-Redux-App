import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  dogs: [],
  isFetching: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {};
    case FETCH_SUCCESS:
      return {};
    case FETCH_FAILURE:
      return {};
    default:
      return state;
  }
};
