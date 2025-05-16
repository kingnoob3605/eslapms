import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Subject {
  id: number;
  name: string;
  description: string;
  iconClass: string;
  iconBgClass: string;
  grades: string[];
  hoursPerWeek: number;
}

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent {
  // Mock data for subjects
  subjects: Subject[] = [
    {
      id: 1,
      name: 'Mathematics',
      description:
        'Number systems, basic operations, fractions, and elementary algebra for grade school students.',
      iconClass: 'text-blue-600',
      iconBgClass: 'bg-blue-100',
      grades: ['Grade 1', 'Grade 2', 'Grade 3'],
      hoursPerWeek: 2,
    },
    {
      id: 2,
      name: 'Science',
      description:
        'Basics of biology, physics, chemistry, and earth sciences adapted for elementary students.',
      iconClass: 'text-green-600',
      iconBgClass: 'bg-green-100',
      grades: ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      hoursPerWeek: 3,
    },
    {
      id: 3,
      name: 'English',
      description:
        'Reading, writing, grammar, vocabulary, and basic literature for elementary learners.',
      iconClass: 'text-purple-600',
      iconBgClass: 'bg-purple-100',
      grades: ['All Grades'],
      hoursPerWeek: 5,
    },
    {
      id: 4,
      name: 'Filipino',
      description:
        'National language study including reading, writing, and proper grammar for elementary students.',
      iconClass: 'text-red-600',
      iconBgClass: 'bg-red-100',
      grades: ['All Grades'],
      hoursPerWeek: 4,
    },
  ];

  editSubject(id: number) {
    console.log(`Editing subject with ID: ${id}`);
    // Logic for editing a subject
  }

  deleteSubject(id: number) {
    console.log(`Deleting subject with ID: ${id}`);
    // Logic for deleting a subject
  }

  addSubject() {
    console.log('Adding new subject');
    // Logic for adding a new subject
  }
}
