import { createReducer, on } from "@ngrx/store";
import { UsersState } from "../model/users-state";
import * as UsersActions from './actions';

export const initialState: UsersState = {
  isLoading: false,
  data: [],
  error: null
}

export const reducers = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({
    ...state, isLoading: true
  }))
);
