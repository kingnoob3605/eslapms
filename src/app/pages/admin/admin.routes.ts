import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard.component').then(
        (component) => component.AdminDashboardComponent,
      ),
  },
  {
    path: 'registrations',
    loadComponent: () =>
      import('./pages/registrations/registrations.component').then(
        (component) => component.RegistrationsComponent,
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
    path: 'levels',
    loadComponent: () =>
      import('./pages/levels/levels.component').then(
        (component) => component.LevelsComponent,
      ),
  },
  {
    path: 'school-year',
    loadComponent: () =>
      import('./pages/school-year/school-year.component').then(
        (component) => component.SchoolYearComponent,
      ),
  },
  {
    path: 'teachers',
    loadComponent: () =>
      import('./pages/teachers/teachers.component').then(
        (component) => component.TeachersComponent,
      ),
  },
  {
    path: 'parents',
    loadComponent: () =>
      import('./pages/parents/parents.component').then(
        (component) => component.ParentsComponent,
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
