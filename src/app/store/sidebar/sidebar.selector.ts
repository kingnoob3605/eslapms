import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SidebarState } from './sidebar.state';

export const selectSidebarState =
  createFeatureSelector<SidebarState>('sidebar');

export const selectSidebarStatus = createSelector(
  selectSidebarState,
  (state) => state.status,
);
