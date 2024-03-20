import { createAction, props } from "@ngrx/store";
import { User } from "../model/user";

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
  '[Users] Get Users success',
  props<{users: User[]}>()
);

export const getUsersFailure = createAction(
  '[Users] Get Users failure',
  props<{error: string}>()
);
