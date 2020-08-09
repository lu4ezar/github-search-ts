export type CurrentPage = number;
export type TotalPages = number;
export type LoadedPages = number;

export interface IPagination {
  currentPage: CurrentPage;
  loadedPages: LoadedPages;
  totalPages: TotalPages;
}

export type IPaginationState = Readonly<IPagination>;
