// @flow
export type PageCount = number;
export type NextPageUrl = string;

export type PaginationType = {
	pageCount: PageCount,
	nextPageUrl: ?NextPageUrl
};

export type PaginationState = {
	+pageCount: PageCount,
	+nextPageUrl: NextPageUrl
};
