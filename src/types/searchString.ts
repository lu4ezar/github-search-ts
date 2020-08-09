export type SearchString = string;

type SearchStringAction = "SET_SEARCH_STRING";

export type ISearchStringAction = {
  type: SearchStringAction;
  payload: SearchString;
};

export type ISearchStringState = Readonly<{ searchString: SearchString }>;
