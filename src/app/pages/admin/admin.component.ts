import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { SidebarItemComponent } from '../../shared/components/sidebar-item/sidebar-item.component';
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
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [SidebarComponent, SidebarItemComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
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
}
