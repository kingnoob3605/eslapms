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
    path: 'attendance',
    loadComponent: () =>
      import('./pages/attendance/attendance.component').then(
        (component) => component.AttendanceComponent,
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
    path: 'health',
    loadComponent: () =>
      import('./pages/health-records/health-records.component').then(
        (component) => component.HealthRecordsComponent,
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
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.component').then(
        (component) => component.ReportsComponent,
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
