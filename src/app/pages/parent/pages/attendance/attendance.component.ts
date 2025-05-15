import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="attendance-container">
      <h1 class="mb-4 text-2xl font-bold text-gray-800">Attendance Records</h1>
      <p class="mb-6 text-gray-600">View your children's attendance history</p>

      <div class="attendance-content rounded-lg bg-white p-4 shadow">
        <p class="py-8 text-center text-gray-500">
          Attendance records will be displayed here. This component will be
          fully developed in the next phase.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .attendance-container {
        padding: 1rem;
      }

      .attendance-content {
        min-height: 300px;
      }
    `,
  ],
})
export class AttendanceComponent {
  // Functionality will be added later
}
