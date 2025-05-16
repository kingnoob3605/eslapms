import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import {
  matAssessmentRound,
  matPeopleRound,
  matAssignmentRound,
  matHealthAndSafetyRound,
} from '@ng-icons/material-icons/round';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, NgIcon],
  template: `
    <div class="reports-container">
      <h1 class="mb-4 text-2xl font-bold text-gray-800">Generate Reports</h1>
      <p class="mb-6 text-gray-600">
        Create and download DepEd standard reports (SF1, SF2, SF4, SF8)
      </p>

      <div class="reports-grid">
        <div class="report-card">
          <div class="report-icon">
            <ng-icon
              [svg]="peopleIcon"
              size="32"
              class="text-blue-600"
            ></ng-icon>
          </div>
          <div class="report-info">
            <h3 class="report-title">School Form 1 (SF1)</h3>
            <p class="report-desc">School Register</p>
            <p class="mb-4 text-sm text-gray-500">
              List of officially enrolled students with their basic information
            </p>
            <button class="generate-btn">Generate SF1</button>
          </div>
        </div>

        <div class="report-card">
          <div class="report-icon">
            <ng-icon
              [svg]="attendanceIcon"
              size="32"
              class="text-green-600"
            ></ng-icon>
          </div>
          <div class="report-info">
            <h3 class="report-title">School Form 2 (SF2)</h3>
            <p class="report-desc">Daily Attendance Report</p>
            <p class="mb-4 text-sm text-gray-500">
              Daily record of student attendance
            </p>
            <button class="generate-btn">Generate SF2</button>
          </div>
        </div>

        <div class="report-card">
          <div class="report-icon">
            <ng-icon
              [svg]="reportIcon"
              size="32"
              class="text-purple-600"
            ></ng-icon>
          </div>
          <div class="report-info">
            <h3 class="report-title">School Form 4 (SF4)</h3>
            <p class="report-desc">Monthly Learner's Movement and Attendance</p>
            <p class="mb-4 text-sm text-gray-500">
              Monthly summary of student attendance and transfers
            </p>
            <button class="generate-btn">Generate SF4</button>
          </div>
        </div>

        <div class="report-card">
          <div class="report-icon">
            <ng-icon
              [svg]="healthIcon"
              size="32"
              class="text-red-600"
            ></ng-icon>
          </div>
          <div class="report-info">
            <h3 class="report-title">School Form 8 (SF8)</h3>
            <p class="report-desc">Health and Nutrition Report</p>
            <p class="mb-4 text-sm text-gray-500">
              Health assessment and nutritional status of students
            </p>
            <button class="generate-btn">Generate SF8</button>
          </div>
        </div>
      </div>

      <div class="recent-reports mt-8">
        <h2 class="mb-4 text-xl font-bold">Recently Generated Reports</h2>
        <div class="rounded-lg bg-white p-4 shadow">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="py-2 text-left">Report Type</th>
                <th class="py-2 text-left">Date Generated</th>
                <th class="py-2 text-left">Class</th>
                <th class="py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-3">SF2 - Daily Attendance</td>
                <td class="py-3">May 16, 2025</td>
                <td class="py-3">Grade 3-A</td>
                <td class="py-3">
                  <button class="download-btn">Download</button>
                </td>
              </tr>
              <tr class="border-b">
                <td class="py-3">SF1 - School Register</td>
                <td class="py-3">May 10, 2025</td>
                <td class="py-3">Grade 3-A</td>
                <td class="py-3">
                  <button class="download-btn">Download</button>
                </td>
              </tr>
              <tr>
                <td class="py-3">SF8 - Health Report</td>
                <td class="py-3">April 30, 2025</td>
                <td class="py-3">Grade 3-A</td>
                <td class="py-3">
                  <button class="download-btn">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .reports-container {
        padding: 1rem;
      }

      .reports-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .report-card {
        display: flex;
        background-color: white;
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .report-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
      }

      .report-icon {
        margin-right: 1rem;
      }

      .report-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .report-desc {
        color: #666;
        margin-bottom: 0.5rem;
      }

      .generate-btn {
        padding: 0.5rem 1rem;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 0.25rem;
        font-size: 0.9rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      .generate-btn:hover {
        background-color: #2980b9;
      }

      .download-btn {
        padding: 0.25rem 0.75rem;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      .download-btn:hover {
        background-color: #ddd;
      }

      @media (max-width: 640px) {
        .reports-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ReportsComponent {
  // Icons
  reportIcon = matAssessmentRound;
  peopleIcon = matPeopleRound;
  attendanceIcon = matAssignmentRound;
  healthIcon = matHealthAndSafetyRound;
}
