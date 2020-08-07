// @flow
export type SearchString = string;

export type SearchStringActions = 'UPDATE_SEARCH_STRING';

export type SearchStringAction = {
	type: SearchStringActions,
	value: SearchString
};

export type SearchStringState = { +value: SearchString };
