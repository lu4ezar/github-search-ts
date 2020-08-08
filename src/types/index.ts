import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { DataState, DataAction } from "./data";
import type { SearchStringState, SearchStringAction } from "./searchString";
import type { LoadingState } from "./loading";
import type { ErrorState } from "./error";
import type { PaginationState } from "./pagination";

export type ReduxInitAction = { type: "@@INIT" };

export type State = DataState &
  SearchStringState &
  LoadingState &
  ErrorState &
  PaginationState;

export type Action = ReduxInitAction | DataAction | SearchStringAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
