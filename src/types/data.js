// @flow

export type Id = number;
export type Name = string;
export type HtmlUrl = string;
export type Description = string;
export type StargazersCount = number;
export type WatchersCount = number;

export type DataType = {
	id?: Id,
	name: Name,
	htmlUrl: HtmlUrl,
	description: Description,
	stargazersCount: StargazersCount,
	watchersCount: WatchersCount
};

export type DataArray = Array<DataType>;

export type DataActions = 'UPDATE_DATA';

export type DataAction = {
	type: DataActions,
	value: DataType
};

export type DataState = { +value: DataType };
