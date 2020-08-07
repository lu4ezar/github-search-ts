import { UPDATE_SEARCH_STRING } from '../actions/actionTypes';

const searchStringReducer = (state = '', action) => {
	switch (action.type) {
		case UPDATE_SEARCH_STRING:
			return action.value;
		default:
			return state;
	}
};
export default searchStringReducer;
