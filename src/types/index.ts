import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { IRepoState, IRepoAction } from './repos';
import { ISearchStringState, ISearchStringAction } from './searchString';
import { ILoadingState } from './loading';
import { IErrorState } from './error';
import { IPaginationState } from './pagination';

export type ReduxInitAction = { type: '@@INIT' };

type State = IRepoState &
ISearchStringState &
ILoadingState &
IErrorState &
IPaginationState;

export type Action = ReduxInitAction | IRepoAction | ISearchStringAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
