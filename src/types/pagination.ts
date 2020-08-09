export type Page = number;
export type NextPageUrl = string | null;

export type INextPageUrl = {
  nextPageUrl: NextPageUrl;
};

export interface IPagination extends INextPageUrl {
  page: Page;
}

// type WithOptional<T, TRequired extends keyof T> = Partial<T> &
//   Pick<T, TRequired>;
//
// export type IPaginationState = Readonly<WithOptional<IPagination, "pageCount">>;

export type IPaginationState = Readonly<IPagination>;
