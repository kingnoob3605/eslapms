import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../../store/auth/auth.actions';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../../store/auth/auth.selector';
import { CommonModule } from '@angular/common';
import { AuthLoading } from '../../../store/auth/auth.state';
import { matPowerSettingsNewRound } from '@ng-icons/material-icons/round';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-logout-button',
  imports: [CommonModule, NgIcon],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css',
})
export class LogoutButtonComponent {
  private store = inject(Store);
  AuthLoading = AuthLoading;

  logoutIcon = matPowerSettingsNewRound;

  loading = this.store.selectSignal(selectAuthLoading);
  error = this.store.selectSignal(selectAuthError);

  logout() {
    this.store.dispatch(logout());
  }
}
