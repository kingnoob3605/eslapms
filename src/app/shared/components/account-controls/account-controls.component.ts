import { Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../../store/auth/auth.selector';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { RoleSwitchComponent } from '../role-switch/role-switch.component';
import { hideAccountControls } from './store/account-controls.actions';
import { Router, RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { matManageAccountsRound } from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-account-controls',
  imports: [
    CommonModule,
    LogoutButtonComponent,
    RoleSwitchComponent,
    NgIcon,
    RouterLink,
  ],
  templateUrl: './account-controls.component.html',
  styleUrl: './account-controls.component.css',
})
export class AccountControlsComponent {
  private store = inject(Store);
  public router = inject(Router);

  accountSettingsIcon = matManageAccountsRound;

  user = this.store.selectSignal(selectAuthUser);
  activeRole = computed(() => {
    const activeRole = this.user()?.roles?.find((role) => role.is_active);
    return activeRole ? activeRole.name : null;
  });

  constructor() {
    hideAccountControls();
  }

  hideAccountControls() {
    this.store.dispatch(hideAccountControls());
  }
}
