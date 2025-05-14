export enum SidebarStatus {
  expanded = 'expanded',
  collapsed = 'collapsed',
  hidden = 'hidden',
}

export interface SidebarState {
  status: SidebarStatus;
}

export const initialSidebarState: SidebarState = {
  status: SidebarStatus.expanded,
};
