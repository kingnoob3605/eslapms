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
      import('../shared/pages/students/students.component').then(
        (component) => component.StudentsComponent,
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
