import { RootState } from "./store";

export const selectSearchString = (state: RootState) => state.searchString;
export const selectRepos = (state: RootState) => state.repos;
export const selectLoadingStatus = (state: RootState) => state.loading;
export const selectError = (state: RootState) => state.error;
export const selectPagination = (state: RootState) => state.pagination;
