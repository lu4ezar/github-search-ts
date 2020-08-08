export type ErrorType = string;

export type ErrorActions = "UPDATE_ERROR_STATE";

export type ErrorAction = {
  type: ErrorActions;
  value: ErrorType;
};

export type ErrorState = { readonly value: ErrorType };
