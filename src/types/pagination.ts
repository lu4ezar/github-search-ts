import { Links } from 'parse-link-header';

export interface IPagination extends Links {
  current: Links['page'];
}

export type IPaginationState = Readonly<IPagination>;
