import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import {
	CLEAR_DATA,
	FETCH_DATA_FAILURE,
	FETCH_DATA_END,
	UPDATE_SEARCH_STRING,
	FETCH_NEXT_PAGE,
	FETCH_DATA_START
} from './actions/actionTypes';
import { fetchData, stripData, getNextPageUrl } from '../dataUtils';
import requestDataSuccess from './actions/dataActions';

const getSearchString = state => state.searchString;
const getPagination = state => state.pagination;
const getLoadingState = state => state.isLoading;

function* dataRequestNextAsync() {
	const pagination = yield select(getPagination);
	const hasNextPage = !!pagination.nextPageUrl;
	const isLoading = yield select(getLoadingState);
	if (isLoading || !hasNextPage) {
		return;
	}
	yield put({ type: FETCH_DATA_START });
	try {
		const response = yield call(fetchData, pagination.nextPageUrl);
		const data = stripData(response.data);
		const nextPageUrl = getNextPageUrl(response);
		yield put(requestDataSuccess(data, nextPageUrl));
	} catch (error) {
		yield put({ type: FETCH_DATA_FAILURE, error: error.message });
	} finally {
		yield put({ type: FETCH_DATA_END });
	}
}

function* dataRequestAsync() {
	yield delay(2000);
	const searchString = yield select(getSearchString);
	if (searchString.length < 3) {
		return;
	}
	yield put({ type: CLEAR_DATA });
	yield put({ type: FETCH_DATA_START });
	try {
		const response = yield call(fetchData, { searchString });
		if (!response.data.total_count) {
			throw new Error('Nothing was found!');
		}
		const data = stripData(response.data);
		const nextPageUrl = getNextPageUrl(response);
		yield put(requestDataSuccess(data, nextPageUrl));
	} catch (error) {
		yield put({ type: FETCH_DATA_FAILURE, error: error.message });
	} finally {
		yield put({ type: FETCH_DATA_END });
	}
}

function* watchDataRequest() {
	yield takeLatest(UPDATE_SEARCH_STRING, dataRequestAsync);
	yield takeLatest(FETCH_NEXT_PAGE, dataRequestNextAsync);
}

export default watchDataRequest;
