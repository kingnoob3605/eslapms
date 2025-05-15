import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matAccountCircleRound,
  matEditRound,
  matHealthAndSafetyRound,
  matEventNoteRound,
  matSchoolRound,
} from '@ng-icons/material-icons/round';

interface Child {
  id: number;
  name: string;
  grade: string;
  section: string;
  lrn: string;
  age: number;
  gender: string;
  photo?: string;
  dateOfBirth: string;
  contactNumber: string;
  address: string;
  healthStatus: string;
  attendanceRate: number;
}

@Component({
  selector: 'app-my-children',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './my-children.component.html',
  styleUrl: './my-children.component.css',
})
export class MyChildrenComponent implements OnInit {
  // Icons
  accountIcon = matAccountCircleRound;
  editIcon = matEditRound;
  healthIcon = matHealthAndSafetyRound;
  attendanceIcon = matEventNoteRound;
  schoolIcon = matSchoolRound;

  // Mock children data
  children: Child[] = [
    {
      id: 1,
      name: 'John Doe',
      grade: '3',
      section: 'A',
      lrn: '136428975310',
      age: 9,
      gender: 'Male',
      dateOfBirth: '2016-03-15',
      contactNumber: '+63 912 345 6789',
      address: '123 Main St, Davao City',
      healthStatus: 'Good',
      attendanceRate: 95,
    },
    {
      id: 2,
      name: 'Mary Doe',
      grade: '1',
      section: 'B',
      lrn: '136428975311',
      age: 7,
      gender: 'Female',
      dateOfBirth: '2018-07-22',
      contactNumber: '+63 912 345 6789',
      address: '123 Main St, Davao City',
      healthStatus: 'Needs Attention',
      attendanceRate: 88,
    },
  ];

  // Selected child for detailed view
  selectedChild: Child | null = null;

  constructor() {}

  ngOnInit(): void {
    // Initialize with first child selected
    if (this.children.length > 0) {
      this.selectedChild = this.children[0];
    }
  }

  // Select a child to display details
  selectChild(child: Child): void {
    this.selectedChild = child;
  }

  // Calculate age from date of birth (would normally be done by a pipe)
  calculateAge(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  // View attendance details
  viewAttendance(childId: number): void {
    console.log(`Viewing attendance for child ID: ${childId}`);
    // This would typically navigate to the attendance page with the child ID as a parameter
  }

  // View health records
  viewHealth(childId: number): void {
    console.log(`Viewing health records for child ID: ${childId}`);
    // This would typically navigate to the health page with the child ID as a parameter
  }

  // Edit child information (would typically open a form)
  editChild(childId: number): void {
    console.log(`Editing information for child ID: ${childId}`);
    // This would typically open a modal or navigate to an edit page
  }
}
