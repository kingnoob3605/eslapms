import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import {
  matPersonRound,
  matCheckCircleRound,
  matCancelRound,
} from '@ng-icons/material-icons/round';

interface Student {
  id: number;
  name: string;
  status: 'present' | 'absent' | 'late' | '';
  notes: string;
}

interface Class {
  id: number;
  name: string;
  students: Student[];
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIcon],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css',
})
export class AttendanceComponent implements OnInit {
  // Icons
  personIcon = matPersonRound;
  presentIcon = matCheckCircleRound;
  absentIcon = matCancelRound;

  // Mock class data
  classes: Class[] = [
    {
      id: 1,
      name: 'Grade 3-A',
      students: [
        { id: 1, name: 'Juan Dela Cruz', status: '', notes: '' },
        { id: 2, name: 'Maria Santos', status: '', notes: '' },
        { id: 3, name: 'Pedro Reyes', status: '', notes: '' },
        { id: 4, name: 'Ana Gonzales', status: '', notes: '' },
        { id: 5, name: 'Marco Ramos', status: '', notes: '' },
        { id: 6, name: 'Sofia Luna', status: '', notes: '' },
        { id: 7, name: 'Gabriel Torres', status: '', notes: '' },
        { id: 8, name: 'Isabella Reyes', status: '', notes: '' },
        { id: 9, name: 'Miguel Santos', status: '', notes: '' },
        { id: 10, name: 'Camila Bautista', status: '', notes: '' },
      ],
    },
    {
      id: 2,
      name: 'Grade 3-B',
      students: [
        { id: 11, name: 'Lucas Tan', status: '', notes: '' },
        { id: 12, name: 'Sophia Lim', status: '', notes: '' },
        { id: 13, name: 'Nathan Cruz', status: '', notes: '' },
        { id: 14, name: 'Emma Garcia', status: '', notes: '' },
        { id: 15, name: 'Daniel Mendoza', status: '', notes: '' },
      ],
    },
  ];

  // Currently selected class
  selectedClass: Class = this.classes[0];

  // Current date
  currentDate: Date = new Date();

  // Form related properties
  attendanceForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.attendanceForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.selectClass(this.selectedClass);
  }

  // Select a class to take attendance for
  selectClass(classData: Class): void {
    this.selectedClass = classData;
    this.resetForm();
  }

  // Reset the form with the selected class's students
  resetForm(): void {
    this.formSubmitted = false;
    const studentControls: any = {};

    this.selectedClass.students.forEach((student) => {
      studentControls[`status_${student.id}`] = [student.status];
      studentControls[`notes_${student.id}`] = [student.notes];
    });

    this.attendanceForm = this.fb.group(studentControls);
  }

  // Mark a student as present
  markPresent(studentId: number): void {
    this.attendanceForm.get(`status_${studentId}`)?.setValue('present');
  }

  // Mark a student as absent
  markAbsent(studentId: number): void {
    this.attendanceForm.get(`status_${studentId}`)?.setValue('absent');
  }

  // Mark a student as late
  markLate(studentId: number): void {
    this.attendanceForm.get(`status_${studentId}`)?.setValue('late');
  }

  // Get the status of a student
  getStatus(studentId: number): string {
    return this.attendanceForm.get(`status_${studentId}`)?.value || '';
  }

  // Submit the attendance form
  submitAttendance(): void {
    if (this.attendanceForm.valid) {
      this.formSubmitted = true;

      // Update the student statuses in the selected class
      this.selectedClass.students.forEach((student) => {
        student.status =
          this.attendanceForm.get(`status_${student.id}`)?.value || '';
        student.notes =
          this.attendanceForm.get(`notes_${student.id}`)?.value || '';
      });

      console.log('Attendance submitted:', this.selectedClass);

      // In a real application, you would send this data to a backend service
      // this.attendanceService.submitAttendance(this.selectedClass, this.currentDate).subscribe(...);
    }
  }

  // Calculate statistics for the selected class
  get presentCount(): number {
    return this.selectedClass.students.filter((s) => s.status === 'present')
      .length;
  }

  get absentCount(): number {
    return this.selectedClass.students.filter((s) => s.status === 'absent')
      .length;
  }

  get lateCount(): number {
    return this.selectedClass.students.filter((s) => s.status === 'late')
      .length;
  }

  get notMarkedCount(): number {
    return this.selectedClass.students.filter((s) => s.status === '').length;
  }

  get attendanceRate(): number {
    const total = this.selectedClass.students.length;
    const present = this.presentCount + this.lateCount;
    return total > 0 ? Math.round((present / total) * 100) : 0;
  }
}
