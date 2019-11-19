import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE_BREED
} from "../actions";

const initialState = {
  dogs: [],
  breed: "husky",
  isFetching: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        dogs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case UPDATE_BREED:
      return {
        ...state,
        breed: action.payload
      };
    default:
      return state;
  }
};
