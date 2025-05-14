import { createReducer, on } from '@ngrx/store';
import { initialSidebarState, SidebarStatus } from './sidebar.state';
import * as SidebarActions from './sidebar.actions';

export const sidebarReducer = createReducer(
  initialSidebarState,

  on(SidebarActions.expandSidebar, (state) => ({
    ...state,
    status: SidebarStatus.expanded,
  })),

  on(SidebarActions.collapseSidebar, (state) => ({
    ...state,
    status: SidebarStatus.collapsed,
  })),

  on(SidebarActions.hideSidebar, (state) => ({
    ...state,
    status: SidebarStatus.hidden,
  })),
);
