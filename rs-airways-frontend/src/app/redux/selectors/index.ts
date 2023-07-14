import { createSelector } from '@ngrx/store';
import { AppState, AppStore } from '../state.model';

export const selectAppState = (state: AppStore): AppState => state.app;

export const selectAppCurrency = createSelector(
  selectAppState,
  (state: AppState) => state.currency,
);
