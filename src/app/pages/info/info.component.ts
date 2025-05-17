import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  // School information can be expanded with actual data
  // This could be fetched from a service in a real implementation
  schoolInfo = {
    name: 'Sta. Maria Central School',
    founded: '1975',
    address: 'Sta. Maria, Davao City, Philippines',
    contact: '(082) 123-4567',
    email: 'stamaria_cs@deped.gov.ph',
  };
}
