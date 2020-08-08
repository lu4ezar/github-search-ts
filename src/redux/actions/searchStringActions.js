import { UPDATE_SEARCH_STRING } from "./actionTypes";

const updateSearchString = (value) => ({
  type: UPDATE_SEARCH_STRING,
  value,
});

export default updateSearchString;
