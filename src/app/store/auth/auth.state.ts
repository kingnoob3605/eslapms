import { User } from '../../core/models/user.model';

export enum AuthLoading {
  Login = 'login',
  Register = 'register',
  Logout = 'logout',
  RoleSwitch = 'role switch',
}

export enum AuthSuccess {
  Login = 'login',
  Register = 'register',
  Logout = 'logout',
  RoleSwitch = 'role switch',
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  loading: AuthLoading | null;
  success: AuthSuccess | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: null,
  success: null,
};
