import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  constructor() {} // ! what is constructor

  // register new user (to be implemented)
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // login
  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http
      .post<{ user: User; token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        map((response) => {
          const { user, token } = response;
          this.storeUserAndToken(user, token);
          return user;
        }),
        catchError((error) => {
          return throwError(() => error.error.message);
        }),
      );
  }

  // logout
  logout(): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/logout`, {})
      .pipe(tap(() => this.clearAuthData()));
  }

  // store token and user in localStorage
  private storeUserAndToken(user: User, token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // clear stored auth data
  private clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // get user
  getUser(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  // is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // get active role
  getActiveRole(): string | null {
    const user = this.getUser();
    const activeRole = user?.roles?.find((role) => role.is_active);
    return activeRole?.name ?? null;
  }

  // activate a role
  activateRole(roleId: number): Observable<any> {
    return this.http
      .post<{ user: User }>(`${this.apiUrl}/role`, { role_id: roleId })
      .pipe(
        map((response) => {
          localStorage.setItem('user', JSON.stringify(response.user));
          return response.user;
        }),
      );
  }
}
