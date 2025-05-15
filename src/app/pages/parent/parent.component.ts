import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { SidebarItemComponent } from '../../shared/components/sidebar-item/sidebar-item.component';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  matHomeRound,
  matSettingsRound,
  matLocalLibraryRound,
  matEventNoteRound,
  matHealthAndSafetyRound,
  matMessageRound,
} from '@ng-icons/material-icons/round';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [SidebarComponent, SidebarItemComponent, RouterOutlet, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  host: {
    class: 'flex w-full',
  },
})
export class ParentComponent implements OnInit {
  // Icons for sidebar navigation
  homeIcon = matHomeRound;
  settingsIcon = matSettingsRound;
  studentIcon = matLocalLibraryRound;
  attendanceIcon = matEventNoteRound;
  healthIcon = matHealthAndSafetyRound;
  messageIcon = matMessageRound;

  // Track the active section based on the route
  activeSection: string = 'dashboard';

  constructor(private router: Router) {
    // Subscribe to router events to track the active section
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.url;
        // Extract the last part of the URL to determine the active section
        const urlParts = url.split('/');
        this.activeSection = urlParts[urlParts.length - 1] || 'dashboard';
      });
  }

  ngOnInit(): void {
    // Set initial active section based on current route
    const currentUrl = this.router.url;
    const urlParts = currentUrl.split('/');
    this.activeSection = urlParts[urlParts.length - 1] || 'dashboard';
  }
}
