import { Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAuthLoading,
  selectAuthUser,
} from '../../store/auth/auth.selector';
import { CommonModule, NgIf } from '@angular/common';
import { map } from 'rxjs';
import { Role } from '../../core/models/role.model';
import { selectRole } from '../../store/auth/auth.actions';
import { AuthLoading } from '../../store/auth/auth.state';
import { NgIcon } from '@ng-icons/core';
import { matLoginRound } from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-role',
  imports: [CommonModule, NgIcon],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css',
})
export class RoleComponent {
  private store = inject(Store);
  AuthLoading = AuthLoading;

  user = this.store.selectSignal(selectAuthUser);
  roles = computed(() => this.user()?.roles ?? []);
  loading = this.store.selectSignal(selectAuthLoading);

  selectedRole = signal('');

  loginIcon = matLoginRound;

  selectRole(role: Role) {
    this.selectedRole.set(role.name);
    this.store.dispatch(selectRole({ roleId: role.id }));
  }
}
