
import { RootState } from "../reducers";
import { ActionType } from "../reducers/types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";


export type MyThunkAction<T = void, A = unknown> = ThunkAction<
  T,
  RootState,
  A,
  ActionType
>;
export type MyThunkDispatch<T = any> = ThunkDispatch<RootState, T, ActionType>;

export type OnClickType =
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
