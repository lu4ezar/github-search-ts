import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_START,
  UPDATE_SEARCH_STRING,
} from "../actions/actionTypes";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return action.error;
    case UPDATE_SEARCH_STRING:
    case FETCH_DATA_START:
      return "";
    default:
      return state;
  }
};
export default errorReducer;
