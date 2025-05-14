import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../../store/auth/auth.actions';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../../../store/auth/auth.selector';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private store = inject(Store);

  error = this.store.selectSignal(selectAuthError);
  loading = this.store.selectSignal(selectAuthLoading);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value as string;
      const password = this.loginForm.get('password')?.value as string;

      this.store.dispatch(
        login({ credentials: { email: email, password: password } }),
      );
    }
  }
}
