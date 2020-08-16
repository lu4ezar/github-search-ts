type LoadingIdle = 'idle';
type LoadingPending = 'pending';
export type ILoading = LoadingIdle | LoadingPending;

export type ILoadingState = {
  readonly loading: ILoading;
};
