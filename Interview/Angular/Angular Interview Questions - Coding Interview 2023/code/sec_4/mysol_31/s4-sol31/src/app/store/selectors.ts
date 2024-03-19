import { createSelector } from "@ngrx/store";
import { AppState } from "../types/appState";

export const selectFeature = (state: AppState) => state.users

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const usersSelector = createSelector(
  selectFeature,
  (state) => state.data
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
