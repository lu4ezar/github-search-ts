import { FETCH_DATA_SUCCESS, FETCH_NEXT_PAGE } from './actionTypes';

const requestDataSuccess = (data, nextPageUrl) => ({
	type: FETCH_DATA_SUCCESS,
	data,
	nextPageUrl
});

export const fetchNextPage = () => ({
	type: FETCH_NEXT_PAGE
});

export default requestDataSuccess;
