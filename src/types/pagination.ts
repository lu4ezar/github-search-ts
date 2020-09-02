import { Links } from 'parse-link-header';

export type CurrentPage = number;
export type TotalPages = number;
export type LoadedPages = number;

export interface IPagination extends Links {
  current: Links['page'];
}

export type IPaginationState = Readonly<IPagination>;
