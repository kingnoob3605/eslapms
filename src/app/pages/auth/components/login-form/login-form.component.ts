import { Component, inject, signal } from '@angular/core';
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
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule, InputComponent, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private store = inject(Store);

  error = this.store.selectSignal(selectAuthError);
  loading = this.store.selectSignal(selectAuthLoading);

  get isLoading() {
    return this.loading() ? true : false;
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

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
