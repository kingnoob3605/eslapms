import { createAction, props } from '@ngrx/store';
import { User } from '../../core/models/user.model';

export const login = createAction(
  '[Auth] login',
  props<{ credentials: { email: string; password: string } }>(),
);

export const register = createAction(
  '[Auth] register',
  props<{
    data: {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
      roles: number[];
    };
  }>(),
);

export const registerSuccess = createAction(
  '[Auth] register success',
  props<{ message: string }>(),
);

export const registerFailure = createAction(
  '[Auth] register failure',
  props<{ error: string }>(),
);

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ user: User }>(),
);

export const loginFailure = createAction(
  '[Auth] login failure',
  props<{ error: string }>(),
);

export const authenticated = createAction(
  '[Auth] authenticated',
  props<{ user: User }>(),
);

export const unAuthenticated = createAction('[Auth] unauthenticated');

export const logout = createAction('[Auth] logout');

export const logoutSuccess = createAction('[Auth] logout success');

export const initAuth = createAction('[Auth] init auth');

export const selectRole = createAction(
  '[Auth] select role',
  props<{ roleId: number }>(),
);

export const selectRoleSuccess = createAction(
  '[Auth] select role success',
  props<{ user: User }>(),
);

export const selectRoleFailure = createAction(
  '[Auht] select role failure',
  props<{ error: string }>(),
);
