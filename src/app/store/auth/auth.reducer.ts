import { createReducer, on } from '@ngrx/store';
import { AuthLoading, AuthState, initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state) => ({
    ...state,
    loading: AuthLoading.Login,
    error: null,
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user: user,
    loading: null,
    error: null,
  })),

  on(AuthActions.authenticated, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user: user,
    loading: null,
    error: null,
  })),

  on(AuthActions.unAuthenticated, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    loading: null,
    error: null,
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    loading: null,
    error: error,
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    loading: AuthLoading.Logout,
  })),

  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    loading: null,
    error: null,
  })),

  on(AuthActions.selectRole, (state) => ({
    ...state,
    loading: AuthLoading.RoleSwitch,
  })),

  on(AuthActions.selectRoleSuccess, (state, { user }) => ({
    ...state,
    user: user,
    loading: null,
  })),
);
