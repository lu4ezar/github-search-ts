import { createAction } from "@reduxjs/toolkit";
import { IError } from "../types/error";
import { IRepoArray } from "../types/repos";
import { NextPageUrl } from "../types/pagination";

export const fetchSuccess = createAction(
  "fetch/success",
  (repos: IRepoArray, nextPageUrl: NextPageUrl) => ({
    payload: { repos, nextPageUrl }
  })
);

export const fetchFailure = createAction("fetch/failure", (err: IError) => ({
  payload: err
}));

export const fetchStart = createAction("fetch/start");

export const fetchEnd = createAction("fetch/end");

export const fetchNextPage = createAction("fetch/next");
