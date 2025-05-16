import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Section {
  id: number;
  name: string;
  adviser: {
    name: string;
    initials: string;
    avatarColor: string;
  };
  studentCount: number;
  boysCount: number;
  girlsCount: number;
  schoolYear: string;
  room: string;
  schedule: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css',
})
export class SectionsComponent {
  // Mock data for sections
  sections: Section[] = [
    {
      id: 1,
      name: 'Grade 1 - Section A',
      adviser: {
        name: 'Maria Santos',
        initials: 'MS',
        avatarColor: 'bg-blue-100 text-blue-700',
      },
      studentCount: 35,
      boysCount: 25,
      girlsCount: 10,
      schoolYear: '2024-2025',
      room: 'Room 101',
      schedule: '7:30 AM - 4:30 PM',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Grade 1 - Section B',
      adviser: {
        name: 'Juan Reyes',
        initials: 'JR',
        avatarColor: 'bg-green-100 text-green-700',
      },
      studentCount: 32,
      boysCount: 18,
      girlsCount: 14,
      schoolYear: '2024-2025',
      room: 'Room 305',
      schedule: '7:30 AM - 4:30 PM',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Grade 1 - Section A',
      adviser: {
        name: 'Anna Cruz',
        initials: 'AC',
        avatarColor: 'bg-purple-100 text-purple-700',
      },
      studentCount: 30,
      boysCount: 16,
      girlsCount: 14,
      schoolYear: '2024-2025',
      room: 'Room 601',
      schedule: '7:30 AM - 4:30 PM',
      status: 'Active',
    },
  ];

  viewSectionDetails(id: number) {
    console.log(`Viewing details for section with ID: ${id}`);
    // Logic for viewing section details
  }

  editSection(id: number) {
    console.log(`Editing section with ID: ${id}`);
    // Logic for editing a section
  }

  deleteSection(id: number) {
    console.log(`Deleting section with ID: ${id}`);
    // Logic for deleting a section
  }

  createSection() {
    console.log('Creating new section');
    // Logic for creating a new section
  }
}
