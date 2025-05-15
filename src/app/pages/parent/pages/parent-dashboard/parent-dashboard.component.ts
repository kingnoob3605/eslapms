import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matHealthAndSafetyRound,
  matEventNoteRound,
  matSchoolRound,
  matMessageRound,
} from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-parent-dashboard',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './parent-dashboard.component.html',
  styleUrl: './parent-dashboard.component.css',
})
export class ParentDashboardComponent implements OnInit {
  // Icons for the dashboard
  healthIcon = matHealthAndSafetyRound;
  attendanceIcon = matEventNoteRound;
  schoolIcon = matSchoolRound;
  messageIcon = matMessageRound;

  // Mock children data
  children = [
    {
      id: 1,
      name: 'John Doe',
      initials: 'JD',
      grade: '3',
      section: 'A',
      isPresentToday: true,
      healthStatus: 'good',
      attendanceData: {
        present: 45,
        absent: 2,
        late: 3,
        rate: 90,
      },
      healthData: {
        height: '135',
        weight: '32',
        bmi: '17.5',
        status: 'normal',
      },
    },
    {
      id: 2,
      name: 'Mary Doe',
      initials: 'MD',
      grade: '1',
      section: 'B',
      isPresentToday: false,
      healthStatus: 'attention',
      attendanceData: {
        present: 42,
        absent: 5,
        late: 3,
        rate: 84,
      },
      healthData: {
        height: '115',
        weight: '22',
        bmi: '16.6',
        status: 'underweight',
      },
    },
  ];

  // Mock notifications
  notifications = [
    {
      id: 1,
      title: 'Parent-Teacher Meeting',
      content:
        'There will be a parent-teacher meeting on Friday, May 20th at 3:00 PM.',
      time: '2 hours ago',
      type: 'school',
      unread: true,
    },
    {
      id: 2,
      title: 'Attendance Alert',
      content: 'Mary Doe was marked absent today. Please provide a reason.',
      time: '4 hours ago',
      type: 'attendance',
      unread: true,
    },
    {
      id: 3,
      title: 'Health Update',
      content: "Mary Doe's health record has been updated. Please review.",
      time: '1 day ago',
      type: 'health',
      unread: true,
    },
    {
      id: 4,
      title: 'New Message',
      content: "You have a new message from Ms. Johnson, John's teacher.",
      time: '2 days ago',
      type: 'message',
      unread: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // This would typically load data from a service
  }

  viewChildDetails(childId: number): void {
    console.log(`Viewing details for child with ID: ${childId}`);
    // This would typically navigate to a child details page
  }

  markNotificationAsRead(notificationId: number): void {
    console.log(`Marking notification with ID: ${notificationId} as read`);
    // This would typically update the notification status
  }

  viewAllNotifications(): void {
    console.log('Viewing all notifications');
    // This would typically navigate to a notifications page
  }
}
