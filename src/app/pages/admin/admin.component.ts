import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { SidebarItemComponent } from '../../shared/components/sidebar-item/sidebar-item.component';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  matHomeRound,
  matSettingsRound,
  matPersonAddAltRound,
  matCoPresentRound,
  matEscalatorWarningRound,
  matLocalLibraryRound,
  matHiveRound,
  matStairsRound,
  matDateRangeRound,
  matAutoStoriesRound,
} from '@ng-icons/material-icons/round';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, SidebarItemComponent, RouterOutlet, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  homeIcon = matHomeRound;
  settingsIcon = matSettingsRound;
  personAddIcon = matPersonAddAltRound;
  teacherIcon = matCoPresentRound;
  parentIcon = matEscalatorWarningRound;
  studentIcon = matLocalLibraryRound;
  sectionIcon = matHiveRound;
  levelsIcon = matStairsRound;
  schoolYearIcon = matDateRangeRound;
  subjectsIcon = matAutoStoriesRound;

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
