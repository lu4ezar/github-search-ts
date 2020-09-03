import { createAction } from '@reduxjs/toolkit';
import { IError } from '../types/error';
import { IRepoArray } from '../types/repos';
import { IPagination } from '../types/pagination';

export const fetchSuccess = createAction(
  'fetch/success',
  (repos: IRepoArray, pagesInfo: IPagination) => ({
    payload: { repos, pagesInfo },
  }),
);

export const fetchFailure = createAction('fetch/failure', (err: IError) => ({
  payload: err,
}));

export const fetchStart = createAction('fetch/start');

export const fetchEnd = createAction('fetch/end');

export const dropState = createAction('dropState');
