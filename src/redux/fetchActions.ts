import { createAction } from '@reduxjs/toolkit';
import { IError } from '../types/error';
import { IRepoArray } from '../types/repos';
import { TotalPages } from '../types/pagination';

export const fetchSuccess = createAction(
  'fetch/success',
  (repos: IRepoArray, totalPages: TotalPages) => ({
    payload: { repos, totalPages }
  })
);

export const fetchFailure = createAction('fetch/failure', (err: IError) => ({
  payload: err
}));

export const fetchStart = createAction('fetch/start');

export const fetchEnd = createAction('fetch/end');

export const dropState = createAction('dropState');
