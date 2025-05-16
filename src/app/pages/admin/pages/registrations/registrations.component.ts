import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matEditRound,
  matDeleteOutlineRound,
  matCheckCircleOutlineRound,
  matSearchRound,
  matFilterListRound,
  matSortRound,
  matAddRound,
} from '@ng-icons/material-icons/round';

// Mock interface for registration data
interface Registration {
  id: number;
  studentName: string;
  gradeLevel: string;
  dateSubmitted: string;
  status: 'pending' | 'approved' | 'rejected';
  contactNumber: string;
  registrationType: 'new' | 'transfer';
}

@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.css',
})
export class RegistrationsComponent implements OnInit {
  // Icons for the component
  editIcon = matEditRound;
  deleteIcon = matDeleteOutlineRound;
  approveIcon = matCheckCircleOutlineRound;
  searchIcon = matSearchRound;
  filterIcon = matFilterListRound;
  sortIcon = matSortRound;
  addIcon = matAddRound;

  // Search and filter states
  searchTerm: string = '';
  statusFilter: string = 'all';

  // Mock registration data
  registrations: Registration[] = [
    {
      id: 1,
      studentName: 'John Doe',
      gradeLevel: 'Grade 3',
      dateSubmitted: '2025-05-12',
      status: 'pending',
      contactNumber: '0912-345-6789',
      registrationType: 'new',
    },
    {
      id: 2,
      studentName: 'Maria Santos',
      gradeLevel: 'Grade 1',
      dateSubmitted: '2025-05-11',
      status: 'approved',
      contactNumber: '0923-456-7890',
      registrationType: 'new',
    },
    {
      id: 3,
      studentName: 'Pedro Garcia',
      gradeLevel: 'Grade 5',
      dateSubmitted: '2025-05-10',
      status: 'rejected',
      contactNumber: '0934-567-8901',
      registrationType: 'transfer',
    },
    {
      id: 4,
      studentName: 'Ana Reyes',
      gradeLevel: 'Grade 2',
      dateSubmitted: '2025-05-09',
      status: 'pending',
      contactNumber: '0945-678-9012',
      registrationType: 'new',
    },
    {
      id: 5,
      studentName: 'Miguel Lopez',
      gradeLevel: 'Grade 4',
      dateSubmitted: '2025-05-08',
      status: 'approved',
      contactNumber: '0956-789-0123',
      registrationType: 'transfer',
    },
  ];

  filteredRegistrations: Registration[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredRegistrations = [...this.registrations];
  }

  // Handle search functionality
  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
    this.applyFilters();
  }

  // Handle filter by status
  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.statusFilter = target.value;
    this.applyFilters();
  }

  // Apply filters to registration list
  applyFilters(): void {
    this.filteredRegistrations = this.registrations.filter((reg) => {
      // Apply name search
      const nameMatch = reg.studentName.toLowerCase().includes(this.searchTerm);

      // Apply status filter
      const statusMatch =
        this.statusFilter === 'all' || reg.status === this.statusFilter;

      return nameMatch && statusMatch;
    });
  }

  // View registration details
  viewRegistration(id: number): void {
    console.log(`View registration details for ID: ${id}`);
    // This would typically open a modal or navigate to a detail page
  }

  // Approve registration
  approveRegistration(id: number): void {
    console.log(`Approve registration ID: ${id}`);
    // This would typically call a service to update the status
    const index = this.registrations.findIndex((reg) => reg.id === id);
    if (index !== -1) {
      this.registrations[index].status = 'approved';
      this.applyFilters();
    }
  }

  // Reject registration
  rejectRegistration(id: number): void {
    console.log(`Reject registration ID: ${id}`);
    // This would typically call a service to update the status
    const index = this.registrations.findIndex((reg) => reg.id === id);
    if (index !== -1) {
      this.registrations[index].status = 'rejected';
      this.applyFilters();
    }
  }

  // Delete registration
  deleteRegistration(id: number): void {
    console.log(`Delete registration ID: ${id}`);
    // This would typically call a service to delete the registration
    this.registrations = this.registrations.filter((reg) => reg.id !== id);
    this.applyFilters();
  }

  // Get status class for styling
  getStatusClass(status: string): string {
    switch (status) {
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      default:
        return 'status-pending';
    }
  }
}
