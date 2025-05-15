import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="messages-container">
      <h1 class="mb-4 text-2xl font-bold text-gray-800">Messages</h1>
      <p class="mb-6 text-gray-600">
        Communicate with your children's teachers
      </p>

      <div class="messages-content rounded-lg bg-white p-4 shadow">
        <p class="py-8 text-center text-gray-500">
          Messages will be displayed here. This component will be fully
          developed in the next phase.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .messages-container {
        padding: 1rem;
      }

      .messages-content {
        min-height: 300px;
      }
    `,
  ],
})
export class MessagesComponent {
  // Functionality will be added later
}
