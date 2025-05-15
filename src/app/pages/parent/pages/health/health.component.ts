import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="health-container">
      <h1 class="mb-4 text-2xl font-bold text-gray-800">Health Records</h1>
      <p class="mb-6 text-gray-600">View your children's health information</p>

      <div class="health-content rounded-lg bg-white p-4 shadow">
        <p class="py-8 text-center text-gray-500">
          Health records will be displayed here. This component will be fully
          developed in the next phase.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .health-container {
        padding: 1rem;
      }

      .health-content {
        min-height: 300px;
      }
    `,
  ],
})
export class HealthComponent {
  // Functionality will be added later
}
