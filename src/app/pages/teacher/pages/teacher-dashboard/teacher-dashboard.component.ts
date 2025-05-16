import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matPersonRound,
  matAssignmentRound,
  matAutoStoriesRound,
  matHiveRound,
  matHealthAndSafetyRound,
  matMessageRound,
  matAssessmentRound,
  matDateRangeRound,
  matNotificationsRound,
} from '@ng-icons/material-icons/round';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css',
})
export class TeacherDashboardComponent implements OnInit {
  // Icons for use in the template
  studentIcon = matPersonRound;
  attendanceIcon = matAssignmentRound;
  subjectIcon = matAutoStoriesRound;
  sectionIcon = matHiveRound;
  healthIcon = matHealthAndSafetyRound;
  messageIcon = matMessageRound;
  reportIcon = matAssessmentRound;
  scheduleIcon = matDateRangeRound;
  notificationIcon = matNotificationsRound;

  // Track the selected class for the class tabs
  selectedClass: string = 'Grade 3-A';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Any initialization code would go here
  }

  // Method to select a class for the class tabs
  selectClass(className: string): void {
    this.selectedClass = className;
  }

  // Method to handle card click events
  navigateTo(route: string): void {
    console.log(`Navigating to ${route}`);
    this.router.navigate([route]);
  }
}
