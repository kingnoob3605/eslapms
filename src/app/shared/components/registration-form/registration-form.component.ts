import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { buildRegistrationForm } from './registration-form.builder';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, InputComponent, CommonModule, ButtonComponent],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  private formBuilder = inject(FormBuilder);

  registrationForm = buildRegistrationForm(this.formBuilder);

  onSubmit() {
    console.log(this.registrationForm.value.learnerReferenceNo);
  }
}
