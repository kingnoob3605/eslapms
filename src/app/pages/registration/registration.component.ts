import { Component } from '@angular/core';
import { RegistrationFormComponent } from '../../shared/components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration',
  imports: [RegistrationFormComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {}
