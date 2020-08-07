import {
	FETCH_DATA_SUCCESS,
	UPDATE_SEARCH_STRING
} from '../actions/actionTypes';

const initialState = {
	pageCount: 0,
	nextPageUrl: null
};

const pagination = (state = initialState, action) => {
	const { type, nextPageUrl } = action;
	switch (type) {
		case FETCH_DATA_SUCCESS:
			return {
				pageCount: state.pageCount + 1,
				nextPageUrl
			};
		case UPDATE_SEARCH_STRING:
			return initialState;
		default:
			return state;
	}
};

export default pagination;
