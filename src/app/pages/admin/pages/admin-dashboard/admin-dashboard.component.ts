import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matPeopleRound,
  matPersonRound,
  matSchoolRound,
  matAssignmentRound,
  matBarChartRound,
  matCalendarMonthRound,
  matNotificationsRound,
} from '@ng-icons/material-icons/round';
import { Router } from '@angular/router';

// This interface will define our statistics data structure
interface StatCard {
  title: string;
  count: number;
  icon: any;
  bgColor: string;
  textColor: string;
}

// This interface will define our activity data structure
interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  type: 'enrollment' | 'attendance' | 'health' | 'system';
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  // Icons for use in the template
  studentIcon = matPersonRound;
  teachersIcon = matSchoolRound;
  attendanceIcon = matAssignmentRound;
  analyticsIcon = matBarChartRound;
  calendarIcon = matCalendarMonthRound;
  peopleIcon = matPeopleRound;
  notificationIcon = matNotificationsRound;

  // Mock statistics for the dashboard
  stats: StatCard[] = [
    {
      title: 'Total Students',
      count: 249,
      icon: this.studentIcon,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
    },
    {
      title: 'Total Teachers',
      count: 15,
      icon: this.teachersIcon,
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
    },
    {
      title: 'Attendance Today',
      count: 498,
      icon: this.attendanceIcon,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
    },
    {
      title: 'Total Parents',
      count: 402,
      icon: this.peopleIcon,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-800',
    },
  ];

  // Mock recent activities
  recentActivities: Activity[] = [
    {
      id: 1,
      title: 'New Student Enrolled',
      description: 'John Doe enrolled in Grade 3-A',
      time: '10 minutes ago',
      type: 'enrollment',
    },
    {
      id: 2,
      title: 'Attendance Updated',
      description: 'Teacher Maria updated attendance for Grade 5-B',
      time: '25 minutes ago',
      type: 'attendance',
    },
    {
      id: 3,
      title: 'Health Records Updated',
      description: 'Medical records updated for 15 students in Grade 2',
      time: '1 hour ago',
      type: 'health',
    },
    {
      id: 4,
      title: 'System Maintenance',
      description: 'System backup completed successfully',
      time: '2 hours ago',
      type: 'system',
    },
  ];

  // These would typically come from an API
  totalStudents = 523;
  totalPresent = 498;
  totalAbsent = 25;
  attendanceRate = 95.2;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Any initialization code would go here
    // For example, fetching real data from an API
  }

  // Method to handle card click events
  navigateTo(route: string): void {
    console.log(`Navigating to ${route}`);
    this.router.navigate([route]);
  }
}
