import { Routes } from '@angular/router';

export const teacherRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/teacher-dashboard/teacher-dashboard.component').then(
        (component) => component.TeacherDashboardComponent,
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
    path: 'subjects',
    loadComponent: () =>
      import('../shared/pages/subjects/subjects.component').then(
        (component) => component.SubjectsComponent,
      ),
  },
  {
    path: 'sections',
    loadComponent: () =>
      import('../shared/pages/sections/sections.component').then(
        (component) => component.SectionsComponent,
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
