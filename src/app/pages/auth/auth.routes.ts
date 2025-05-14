import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login-form/login-form.component').then(
        (component) => component.LoginFormComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register-form/register-form.component').then(
        (component) => component.RegisterFormComponent,
      ),
  },
];
