import { Routes } from '@angular/router';

export const parentRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/parent-dashboard/parent-dashboard.component').then(
        (component) => component.ParentDashboardComponent,
      ),
  },
  {
    path: 'students',
    loadComponent: () =>
      import('./pages/my-children/my-children.component').then(
        (component) => component.MyChildrenComponent,
      ),
  },
  {
    path: 'attendance',
    loadComponent: () =>
      import('./pages/attendance/attendance.component').then(
        (component) => component.AttendanceComponent,
      ),
  },
  {
    path: 'health',
    loadComponent: () =>
      import('./pages/health/health.component').then(
        (component) => component.HealthComponent,
      ),
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./pages/messages/messages.component').then(
        (component) => component.MessagesComponent,
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('../shared/pages/settings/settings.component').then(
        (component) => component.SettingsComponent,
      ),
  },
];
