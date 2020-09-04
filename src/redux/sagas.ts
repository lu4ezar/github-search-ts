import { AxiosResponse } from 'axios';
import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import parse from 'parse-link-header';
import {
  fetchStart,
  fetchEnd,
  fetchSuccess,
  fetchFailure,
} from './fetchActions';
import { SearchString } from '../types/searchString';
import { selectSearchString } from './selectors';
import { IPagination } from '../types/pagination';
import api from '../axios';

const fetchData = async ({
  searchString,
  page,
}: {searchString: SearchString; page: IPagination['current']}): Promise<AxiosResponse> => {
  try {
    const response = await (api).get(`/orgs/${searchString}/repos`, {
      params: {
        per_page: 10,
        page,
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

function* dataRequestAsync(action: ReturnType<typeof fetchStart>) {
  const searchString: SearchString = yield select(selectSearchString);
  const page = action.payload;
  try {
    const response: AxiosResponse = yield call(fetchData, {
      searchString,
      page,
    });
    const { data, headers: { link } } = response;
    const pagesInfo = { ...parse(link), current: page } as IPagination;
    yield put(fetchSuccess(data, pagesInfo));
  } catch (error) {
    yield put(fetchFailure(error.message));
  } finally {
    yield put(fetchEnd());
  }
}

function* watchDataRequest(): Generator {
  yield takeLatest(fetchStart, dataRequestAsync);
}

export default watchDataRequest;
