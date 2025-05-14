import { Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAuthLoading,
  selectAuthUser,
} from '../../../store/auth/auth.selector';
import { Role } from '../../../core/models/role.model';
import { selectRole } from '../../../store/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matAccountCircleOutline,
  matChangeCircleOutline,
} from '@ng-icons/material-icons/outline';
import { AuthLoading } from '../../../store/auth/auth.state';

@Component({
  selector: 'app-role-switch',
  imports: [CommonModule, NgIcon],
  templateUrl: './role-switch.component.html',
  styleUrl: './role-switch.component.css',
})
export class RoleSwitchComponent {
  private store = inject(Store);
  AuthLoading = AuthLoading;

  user = this.store.selectSignal(selectAuthUser);
  roles = computed(() => this.user()?.roles ?? []);
  roleLoading = this.store.selectSignal(selectAuthLoading);

  userIcon = matAccountCircleOutline;
  changeIcon = matChangeCircleOutline;

  selectedRole = signal<string>('');

  selectRole(role: Role) {
    this.selectedRole.set(role.name);
    this.store.dispatch(selectRole({ roleId: role.id }));
  }
}
