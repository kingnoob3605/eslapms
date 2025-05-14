import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAuthError,
  selectAuthLoading,
  selectSuccess,
} from '../../../../store/auth/auth.selector';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { register } from '../../../../store/auth/auth.actions';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CommonModule, NgFor } from '@angular/common';
import { AuthSuccess } from '../../../../store/auth/auth.state';

@Component({
  selector: 'app-register-form',
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  private store = inject(Store);

  error = this.store.selectSignal(selectAuthError);
  loading = this.store.selectSignal(selectAuthLoading);
  success = this.store.selectSignal(selectSuccess);

  AuthSuccess = AuthSuccess;

  get isLoading() {
    return this.loading() ? true : false;
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    password_confirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    roles: new FormControl([], [Validators.required]),
  });

  rolesList = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Teacher' },
    { id: 3, name: 'Parent' },
  ];

  onSubmit() {
    if (this.registerForm.valid) {
      const name = this.registerForm.get('name')?.value as string;
      const email = this.registerForm.get('email')?.value as string;
      const password = this.registerForm.get('password')?.value as string;
      const password_confirmation = this.registerForm.get('password')
        ?.value as string;
      const roles = this.registerForm.get('roles')?.value as number[];

      this.store.dispatch(
        register({
          data: {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            roles: roles,
          },
        }),
      );
    }
  }

  onRoleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const rolesControl = this.registerForm.get('roles') as FormControl;
    const currentRoles = rolesControl.value || [];

    const value = +checkbox.value;

    if (checkbox.checked) {
      rolesControl.setValue([...currentRoles, value]);
    } else {
      rolesControl.setValue(currentRoles.filter((id: number) => id !== value));
    }

    rolesControl.markAsTouched(); // ensure validation reflects
  }
}
