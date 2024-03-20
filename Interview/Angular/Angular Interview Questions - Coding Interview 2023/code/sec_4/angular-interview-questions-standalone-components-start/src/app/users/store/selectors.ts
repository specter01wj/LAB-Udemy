import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.users;

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
