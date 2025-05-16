import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { buildRegistrationForm } from './registration-form.builder';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  private formBuilder = inject(FormBuilder);

  registrationForm = buildRegistrationForm(this.formBuilder);

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted successfully:', this.registrationForm.value);
      // Logic to submit the form data to the backend
      alert('Registration submitted successfully!');
    } else {
      console.error('Form is invalid');
      // Mark all form controls as touched to show validation errors
      this.markFormGroupTouched(this.registrationForm);
      alert('Please fill all required fields correctly.');
    }
  }

  // Helper method to mark all controls as touched
  private markFormGroupTouched(formGroup: any) {
    Object.values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
