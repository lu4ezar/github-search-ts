import { FETCH_DATA_START, FETCH_DATA_END } from "../actions/actionTypes";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return true;
    case FETCH_DATA_END:
      return false;
    default:
      return state;
  }
};
export default isLoading;
