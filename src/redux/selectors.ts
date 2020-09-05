import { SearchString } from '../types/searchString';
import { IPagination } from '../types/pagination';
import { IError } from '../types/error';
import { ILoading } from '../types/loading';
import { IRepoArray } from '../types/repos';

export const selectSearchString = (state: {
  searchString: SearchString;
}): SearchString => state.searchString;
export const selectRepos = (state: { repos: IRepoArray }): IRepoArray => state.repos;
export const selectLoadingStatus = (state: { loading: ILoading }): ILoading => state.loading;
export const selectError = (state: { error: IError }): IError => state.error;
export const selectPagination = (state: {
  pagination: IPagination;
}): IPagination => state.pagination;
