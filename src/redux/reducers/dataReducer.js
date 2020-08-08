import { CLEAR_DATA, FETCH_DATA_SUCCESS } from "../actions/actionTypes";

const dataReducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case CLEAR_DATA:
      return [];
    case FETCH_DATA_SUCCESS:
      return [...state, ...data];
    default:
      return state;
  }
};
export default dataReducer;
