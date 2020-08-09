import { AxiosResponse } from "axios";
import { takeLatest, call, put, select, delay } from "redux-saga/effects";
import { fetchData, stripData, getNextPageUrl } from "../dataUtils";
import {
  selectSearchString,
  selectPagination,
  selectLoadingStatus
} from "./selectors";
import { searchStringSlice } from "./slices/searchStringSlice";
import { reposSlice } from "./slices/reposSlice";
import {
  fetchStart,
  fetchEnd,
  fetchSuccess,
  fetchFailure,
  fetchNextPage
} from "./fetchActions";
import { IRepoArray } from "../types/repos";
import { IPaginationState } from "../types/pagination";

const { setSearchString } = searchStringSlice.actions;
const { clearRepos } = reposSlice.actions;

function* dataRequestNextAsync() {
  const pagination: IPaginationState = yield select(selectPagination);
  const requestUrl = pagination.nextPageUrl;
  const hasNextPage = !!requestUrl;
  const loading = yield select(selectLoadingStatus);
  if (loading === "pending" || !hasNextPage) {
    return;
  }
  yield put(fetchStart());
  try {
    const response: AxiosResponse = yield call(fetchData, {
      nextPageUrl: requestUrl
    });
    const data: IRepoArray = stripData(response.data);
    const nextPageUrl = getNextPageUrl(response);
    yield put(fetchSuccess(data, nextPageUrl));
  } catch (error) {
    yield put(fetchFailure(error.message));
  } finally {
    yield put(fetchEnd());
  }
}

function* dataRequestAsync() {
  yield delay(2000);
  const searchString = yield select(selectSearchString);
  if (searchString.length < 3) {
    return;
  }
  yield put(fetchStart());
  try {
    const response: AxiosResponse = yield call(fetchData, { searchString });
    if (!response.data.length) {
      throw new Error("Nothing was found!");
    }
    const data: IRepoArray = stripData(response.data);
    const nextPageUrl = getNextPageUrl(response);
    yield put(clearRepos());
    yield put(fetchSuccess(data, nextPageUrl));
  } catch (error) {
    yield put(fetchFailure(error.message));
  } finally {
    yield put(fetchEnd());
  }
}

function* watchDataRequest() {
  yield takeLatest(setSearchString, dataRequestAsync);
  yield takeLatest(fetchNextPage, dataRequestNextAsync);
}

export default watchDataRequest;
