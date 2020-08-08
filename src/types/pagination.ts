type PageCount = number;
type NextPageUrl = string;

export type PaginationType = {
  pageCount: PageCount;
  nextPageUrl?: NextPageUrl;
};

export type PaginationState = {
  readonly pageCount: PageCount;
  readonly nextPageUrl: NextPageUrl;
};
