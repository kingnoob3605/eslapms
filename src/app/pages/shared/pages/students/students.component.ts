import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import {
  matSearchRound,
  matAddRound,
  matVisibilityRound,
  matEditRound,
  matGridViewRound,
  matListRound,
  matArrowBackIosNewRound,
  matArrowForwardIosRound,
  matEventNoteRound,
  matHealthAndSafetyRound,
} from '@ng-icons/material-icons/round';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  lrn: string;
  grade: string;
  section: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  contactNumber: string;
  isPresent: boolean;
  healthStatus: 'Good' | 'Fair' | 'Needs Attention';
  attendanceRate: number;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, NgIcon, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {
  // Icons
  searchIcon = matSearchRound;
  addIcon = matAddRound;
  viewIcon = matVisibilityRound;
  editIcon = matEditRound;
  gridIcon = matGridViewRound;
  listIcon = matListRound;
  prevIcon = matArrowBackIosNewRound;
  nextIcon = matArrowForwardIosRound;
  attendanceIcon = matEventNoteRound;
  healthIcon = matHealthAndSafetyRound;

  // Students data
  students: Student[] = [];
  filteredStudents: Student[] = [];

  // Filters
  searchTerm: string = '';
  gradeFilter: string = '';
  sectionFilter: string = '';

  // View mode
  viewMode: 'grid' | 'list' = 'grid';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 12;

  // Filter options
  grades: string[] = ['1', '2', '3', '4', '5', '6'];
  sections: string[] = ['A', 'B', 'C', 'D'];

  constructor() {}

  ngOnInit(): void {
    // Generate mock student data
    this.generateMockData();
    this.applyFilters();
  }

  // Generate mock data for demonstration
  generateMockData(): void {
    const firstNames = [
      'John',
      'Maria',
      'Carlos',
      'Sophia',
      'Ahmed',
      'Lily',
      'Michael',
      'Juana',
      'David',
      'Emma',
      'Juan',
      'Sarah',
    ];
    const lastNames = [
      'Garcia',
      'Smith',
      'Cruz',
      'Lee',
      'Patel',
      'Nguyen',
      'Santos',
      'Wang',
      'Kim',
      'Reyes',
      'Torres',
      'Gonzalez',
    ];

    for (let i = 1; i <= 50; i++) {
      const firstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const grade = this.grades[Math.floor(Math.random() * this.grades.length)];
      const section =
        this.sections[Math.floor(Math.random() * this.sections.length)];
      const gender = Math.random() > 0.5 ? 'Male' : 'Female';
      const isPresent = Math.random() > 0.15; // 15% absent rate
      const healthStatuses: ['Good', 'Fair', 'Needs Attention'] = [
        'Good',
        'Fair',
        'Needs Attention',
      ];
      const healthStatus =
        healthStatuses[Math.floor(Math.random() * healthStatuses.length)];

      this.students.push({
        id: i,
        firstName,
        lastName,
        lrn: `1364289${(75310 + i).toString().padStart(5, '0')}`,
        grade,
        section,
        gender,
        dateOfBirth: this.generateRandomDate(2010, 2018),
        address: '123 Main St, Davao City',
        contactNumber:
          '+63 912 345 ' +
          Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, '0'),
        isPresent,
        healthStatus,
        attendanceRate: 80 + Math.floor(Math.random() * 20), // 80-100% attendance rate
      });
    }
  }

  // Generate a random date between start and end years
  generateRandomDate(startYear: number, endYear: number): string {
    const year = startYear + Math.floor(Math.random() * (endYear - startYear));
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // Simplified to avoid invalid dates
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  // Apply filters to the student list
  applyFilters(): void {
    this.filteredStudents = this.students.filter((student) => {
      // Search term filter
      const searchLower = this.searchTerm.toLowerCase();
      const nameMatches = `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(searchLower);
      const lrnMatches = student.lrn.includes(this.searchTerm);

      // Grade and section filters
      const gradeMatches = this.gradeFilter
        ? student.grade === this.gradeFilter
        : true;
      const sectionMatches = this.sectionFilter
        ? student.section === this.sectionFilter
        : true;

      return (nameMatches || lrnMatches) && gradeMatches && sectionMatches;
    });
  }

  // Handle search input
  onSearch(): void {
    this.applyFilters();
  }

  // Get initials from name
  getInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }

  // Count present students
  getPresentCount(): number {
    return this.filteredStudents.filter((student) => student.isPresent).length;
  }

  // Count absent students
  getAbsentCount(): number {
    return this.filteredStudents.filter((student) => !student.isPresent).length;
  }

  // Calculate attendance rate
  getAttendanceRate(): number {
    if (this.filteredStudents.length === 0) return 0;
    return Math.round(
      (this.getPresentCount() / this.filteredStudents.length) * 100,
    );
  }

  // Check if current page is the last page
  isLastPage(): boolean {
    return (
      this.currentPage >=
      Math.ceil(this.filteredStudents.length / this.itemsPerPage)
    );
  }

  // Open modal to add new student
  openNewStudentModal(): void {
    console.log('Opening new student modal');
    // This would typically open a modal with a form to add a new student
  }

  // View student details
  viewStudent(student: Student): void {
    console.log('Viewing student:', student.id);
    // This would typically open a modal or navigate to a student detail page
  }

  // Edit student
  editStudent(student: Student): void {
    console.log('Editing student:', student.id);
    // This would typically open a modal with a form to edit the student
  }

  // View attendance history
  viewAttendance(student: Student): void {
    console.log('Viewing attendance for student:', student.id);
    // This would typically open a modal or navigate to an attendance history page
  }

  // View health records
  viewHealth(student: Student): void {
    console.log('Viewing health records for student:', student.id);
    // This would typically open a modal or navigate to a health records page
  }
}
