import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import {
  matPersonRound,
  matLockRound,
  matNotificationsRound,
  matLanguageRound,
  matPaletteRound,
  matSchoolRound,
  matSaveRound,
  matInfoRound,
} from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIcon],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit {
  // Icons
  personIcon = matPersonRound;
  lockIcon = matLockRound;
  notificationIcon = matNotificationsRound;
  languageIcon = matLanguageRound;
  themeIcon = matPaletteRound;
  schoolIcon = matSchoolRound;
  saveIcon = matSaveRound;
  infoIcon = matInfoRound;

  // Active tab
  activeTab:
    | 'profile'
    | 'password'
    | 'preferences'
    | 'notifications'
    | 'system' = 'profile';

  // Forms
  profileForm: FormGroup;
  passwordForm: FormGroup;
  preferencesForm: FormGroup;
  notificationsForm: FormGroup;
  systemForm: FormGroup;

  // Theme options
  themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System Default' },
  ];

  // Language options
  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fil', label: 'Filipino' },
    { value: 'ceb', label: 'Cebuano' },
  ];

  // Session timeout options
  timeoutOptions = [
    { value: '15', label: '15 minutes' },
    { value: '30', label: '30 minutes' },
    { value: '60', label: '1 hour' },
    { value: '120', label: '2 hours' },
  ];

  constructor(private fb: FormBuilder) {
    // Initialize forms
    this.profileForm = this.fb.group({
      name: ['John Doe', Validators.required],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      phone: ['+63 912 345 6789'],
      position: ['Teacher'],
      bio: ['Experienced teacher with passion for education'],
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });

    this.preferencesForm = this.fb.group({
      theme: ['light'],
      language: ['en'],
      fontSize: ['medium'],
      compactView: [false],
    });

    this.notificationsForm = this.fb.group({
      emailNotifications: [true],
      pushNotifications: [true],
      attendanceAlerts: [true],
      systemUpdates: [true],
      parentMessages: [true],
    });

    this.systemForm = this.fb.group({
      currentSchoolYear: ['2025-2026'],
      sessionTimeout: ['30'],
      dataBackup: [true],
      showHelp: [true],
    });
  }

  ngOnInit(): void {
    // Any initialization logic
  }

  // Tab navigation
  setActiveTab(
    tab: 'profile' | 'password' | 'preferences' | 'notifications' | 'system',
  ): void {
    this.activeTab = tab;
  }

  // Form submission handlers
  saveProfile(): void {
    if (this.profileForm.valid) {
      console.log('Profile saved:', this.profileForm.value);
      // Show success message
      alert('Profile updated successfully!');
    }
  }

  savePassword(): void {
    if (this.passwordForm.valid) {
      // Check if passwords match
      if (
        this.passwordForm.get('newPassword')?.value !==
        this.passwordForm.get('confirmPassword')?.value
      ) {
        alert('New password and confirmation do not match');
        return;
      }
      console.log('Password changed');
      // Show success message
      alert('Password changed successfully!');
      this.passwordForm.reset();
    }
  }

  savePreferences(): void {
    if (this.preferencesForm.valid) {
      console.log('Preferences saved:', this.preferencesForm.value);
      // Show success message
      alert('Preferences updated successfully!');
    }
  }

  saveNotifications(): void {
    if (this.notificationsForm.valid) {
      console.log('Notification settings saved:', this.notificationsForm.value);
      // Show success message
      alert('Notification settings updated successfully!');
    }
  }

  saveSystemSettings(): void {
    if (this.systemForm.valid) {
      console.log('System settings saved:', this.systemForm.value);
      // Show success message
      alert('System settings updated successfully!');
    }
  }
}
