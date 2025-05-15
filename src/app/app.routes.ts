import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { unauthGuard } from './core/guards/unauth.guard';
import { roleGuard } from './core/guards/role.guard';
import { noroleGuard } from './core/guards/norole.guard';
import { InfoComponent } from './pages/info/info.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RoleComponent } from './pages/role/role.component';

export const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'role',
    component: RoleComponent,
    canActivate: [authGuard, noroleGuard],
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] },
    loadComponent: () =>
      import('./pages/admin/admin.component').then(
        (component) => component.AdminComponent,
      ),
    loadChildren: () =>
      import('./pages/admin/admin.routes').then((route) => route.adminRoutes),
  },
  {
    path: 'teacher',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['teacher'] },
    loadComponent: () =>
      import('./pages/teacher/teacher.component').then(
        (component) => component.TeacherComponent,
      ),
    loadChildren: () =>
      import('./pages/teacher/teacher.routes').then(
        (route) => route.teacherRoutes,
      ),
  },
  {
    path: 'parent',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['parent'] },
    loadComponent: () =>
      import('./pages/parent/parent.component').then(
        (component) => component.ParentComponent,
      ),
    loadChildren: () =>
      import('./pages/parent/parent.routes').then(
        (route) => route.parentRoutes,
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then(
        (component) => component.AuthComponent,
      ),
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((route) => route.authRoutes),
    canActivate: [unauthGuard],
  },
  {
    path: '**',
    redirectTo: 'info',
  },
];
