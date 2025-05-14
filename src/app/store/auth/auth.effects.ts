import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../core/services/auth.service';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  initAuth,
  authenticated,
  unAuthenticated,
  selectRole,
  selectRoleSuccess,
  selectRoleFailure,
  logoutSuccess,
  register,
  registerSuccess,
  registerFailure,
} from './auth.actions';
import {
  catchError,
  EMPTY,
  exhaustMap,
  map,
  of,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthUser } from './auth.selector';
import { hideAccountControls } from '../../shared/components/account-controls/store/account-controls.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);

  // login effect
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((user) => loginSuccess({ user: user })),
          catchError((error) => {
            return of(loginFailure({ error: error }));
          }),
        ),
      ),
    );
  });

  // register effect
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(register),
      exhaustMap((action) =>
        this.authService.register(action.data).pipe(
          map(() => registerSuccess({ message: 'Register Success' })),
          catchError((error) => {
            return of(registerFailure({ error: error }));
          }),
        ),
      ),
    );
  });

  // login success redirect
  loginSuccessRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        withLatestFrom(this.store.select(selectAuthUser)),
        tap(([action, user]) => {
          const activeRole = user?.roles?.find((role) => role.is_active);

          if (activeRole) {
            this.router.navigateByUrl(`/${activeRole.name}`);
          } else {
            this.router.navigateByUrl('/role');
          }
        }),
      ),
    { dispatch: false },
  );

  // logout
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => logoutSuccess()),
          tap(() => {
            this.store.dispatch(hideAccountControls());
            this.router.navigateByUrl('/auth');
          }),
          catchError((error) => {
            console.error('Logout failed:', error);
            return EMPTY;
          }),
        ),
      ),
    ),
  );

  // init auth
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initAuth),
      map(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || 'null');

        if (token && user) {
          return authenticated({ user });
        } else {
          return unAuthenticated();
        }
      }),
    ),
  );

  // select role
  selectRole$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(selectRole),
      exhaustMap((action) =>
        this.authService.activateRole(action.roleId).pipe(
          map((user) => selectRoleSuccess({ user: user })),
          catchError((error) => of(selectRoleFailure({ error }))),
        ),
      ),
    );
  });

  // redirect according to role
  selectRoleSuccessRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(selectRoleSuccess),
        tap(({ user }) => {
          const activeRole = Array.isArray(user?.roles)
            ? user.roles.find((role) => !!role.is_active)
            : null;

          if (activeRole) {
            this.router.navigateByUrl(`/${activeRole.name}`);
          } else {
            this.router.navigateByUrl('/role');
          }
        }),
      ),
    { dispatch: false },
  );
}
