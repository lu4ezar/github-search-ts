import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import searchString from "./slices/searchStringSlice";
import repos from "./slices/reposSlice";
import loading from "./slices/loadingSlice";
import error from "./slices/errorSlice";
import pagination from "./slices/paginationSlice";
import watchDataRequest from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    searchString,
    repos,
    loading,
    error,
    pagination
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchDataRequest);

export default store;

export type RootState = ReturnType<typeof store.getState>;
