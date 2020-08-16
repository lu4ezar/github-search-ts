import { AxiosResponse } from 'axios';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  fetchData,
  getTotalPagesFromResponseHeader,
} from './sagaLittleHelpers';
import { selectSearchString, selectPagination } from './selectors';
import {
  fetchStart,
  fetchEnd,
  fetchSuccess,
  fetchFailure,
} from './fetchActions';
import { IPaginationState } from '../types/pagination';
import { SearchString } from '../types/searchString';

function* dataRequestAsync() {
  const searchString: SearchString = yield select(selectSearchString);
  const pagination: IPaginationState = yield select(selectPagination);
  let { loadedPages, totalPages } = pagination;

  try {
    const response: AxiosResponse = yield call(
      fetchData,
      searchString,
      loadedPages,
    );

    if (!response.data?.length) {
      throw new Error('Nothing was found!');
    }

    const { data, headers } = response;
    if (!totalPages) {
      totalPages = getTotalPagesFromResponseHeader(headers);
    }
    yield put(fetchSuccess(data, totalPages));
  } catch (error) {
    yield put(fetchFailure(error.message));
  } finally {
    yield put(fetchEnd());
  }
}

function* watchDataRequest() {
  yield takeLatest(fetchStart, dataRequestAsync);
}

export default watchDataRequest;
