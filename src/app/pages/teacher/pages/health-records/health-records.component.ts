import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import {
  matPersonRound,
  matHealthAndSafetyRound,
} from '@ng-icons/material-icons/round';

interface Student {
  id: number;
  name: string;
  grade: string;
  section: string;
  healthData: {
    height: number;
    weight: number;
    bmi: number;
    vision: string;
    hearing: string;
    dentalHealth: string;
    nutritionalStatus: string;
    lastUpdated: Date;
  };
}

@Component({
  selector: 'app-health-records',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIcon],
  templateUrl: './health-records.component.html',
  styleUrl: './health-records.component.css',
})
export class HealthRecordsComponent {
  // Icons
  personIcon = matPersonRound;
  healthIcon = matHealthAndSafetyRound;

  // Selected student and form
  selectedStudent: Student | null = null;
  healthForm: FormGroup;
  formSubmitted = false;

  // Mock students data
  students: Student[] = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      grade: '3',
      section: 'A',
      healthData: {
        height: 135,
        weight: 32,
        bmi: 17.5,
        vision: 'Normal',
        hearing: 'Normal',
        dentalHealth: 'Good',
        nutritionalStatus: 'Normal',
        lastUpdated: new Date(2025, 3, 15),
      },
    },
    {
      id: 2,
      name: 'Maria Santos',
      grade: '3',
      section: 'A',
      healthData: {
        height: 130,
        weight: 28,
        bmi: 16.6,
        vision: 'Normal',
        hearing: 'Normal',
        dentalHealth: 'Fair',
        nutritionalStatus: 'Underweight',
        lastUpdated: new Date(2025, 4, 1),
      },
    },
    {
      id: 3,
      name: 'Pedro Reyes',
      grade: '3',
      section: 'A',
      healthData: {
        height: 138,
        weight: 35,
        bmi: 18.4,
        vision: 'Needs Attention',
        hearing: 'Normal',
        dentalHealth: 'Good',
        nutritionalStatus: 'Normal',
        lastUpdated: new Date(2025, 4, 5),
      },
    },
  ];

  // Form options for dropdowns
  visionOptions = ['Normal', 'Needs Attention', 'Severe Issue'];
  hearingOptions = ['Normal', 'Needs Attention', 'Severe Issue'];
  dentalOptions = ['Excellent', 'Good', 'Fair', 'Poor'];
  nutritionalOptions = [
    'Normal',
    'Underweight',
    'Overweight',
    'Severely Underweight',
    'Obese',
  ];

  constructor(private fb: FormBuilder) {
    this.healthForm = this.createHealthForm();
  }

  // Create the health form with initial values
  createHealthForm(student?: Student): FormGroup {
    return this.fb.group({
      height: [student ? student.healthData.height : ''],
      weight: [student ? student.healthData.weight : ''],
      vision: [student ? student.healthData.vision : ''],
      hearing: [student ? student.healthData.hearing : ''],
      dentalHealth: [student ? student.healthData.dentalHealth : ''],
      nutritionalStatus: [student ? student.healthData.nutritionalStatus : ''],
      notes: [''],
    });
  }

  // Select a student to view/edit health data
  selectStudent(student: Student): void {
    this.selectedStudent = student;
    this.healthForm = this.createHealthForm(student);
    this.formSubmitted = false;
  }

  // Calculate BMI based on height and weight
  calculateBMI(height: number, weight: number): number {
    const heightInMeters = height / 100;
    return +(weight / (heightInMeters * heightInMeters)).toFixed(1);
  }

  // Determine nutritional status based on BMI
  getNutritionalStatus(bmi: number): string {
    if (bmi < 16) return 'Severely Underweight';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  // Submit the health form
  submitHealthForm(): void {
    if (this.healthForm.valid && this.selectedStudent) {
      const formValues = this.healthForm.value;

      // Calculate BMI
      const height = +formValues.height;
      const weight = +formValues.weight;
      const bmi = this.calculateBMI(height, weight);

      // Update student health data
      this.selectedStudent.healthData = {
        ...this.selectedStudent.healthData,
        height,
        weight,
        bmi,
        vision: formValues.vision,
        hearing: formValues.hearing,
        dentalHealth: formValues.dentalHealth,
        nutritionalStatus: formValues.nutritionalStatus,
        lastUpdated: new Date(),
      };

      this.formSubmitted = true;
      console.log('Updated health data:', this.selectedStudent);

      // In a real application, you would send this data to a backend service
      // this.healthService.updateHealthData(this.selectedStudent.id, this.selectedStudent.healthData).subscribe(...);
    }
  }
}
