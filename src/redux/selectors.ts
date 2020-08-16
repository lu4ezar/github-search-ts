import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectSearchString = (state: RootState) => state.searchString;
export const selectRepos = (state: RootState) => state.repos;
export const selectLoadingStatus = (state: RootState) => state.loading;
export const selectError = (state: RootState) => state.error;
export const selectPagination = (state: RootState) => state.pagination;

export const selectCurrentPage = createSelector(
  [selectPagination, selectRepos],
  ({ currentPage }, repos) =>
    repos.filter(
      (_, index) =>
        index > (currentPage - 1) * 10 - 1 && index < currentPage * 10,
    ),
);
