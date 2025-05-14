import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountControlsState } from './account-controls.state';

export const selectAccountControlsState =
  createFeatureSelector<AccountControlsState>('accountControls');

export const selectSidebarStatus = createSelector(
  selectAccountControlsState,
  (state) => state.isShown,
);
