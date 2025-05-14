import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { SidebarItemComponent } from '../../shared/components/sidebar-item/sidebar-item.component';
import {
  matAutoStoriesRound,
  matDateRangeRound,
  matHiveRound,
  matHomeRound,
  matLocalLibraryRound,
  matSettingsRound,
  matStairsRound,
} from '@ng-icons/material-icons/round';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teacher',
  imports: [SidebarComponent, SidebarItemComponent, RouterOutlet],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
})
export class TeacherComponent {
  homeIcon = matHomeRound;
  settingsIcon = matSettingsRound;
  studentIcon = matLocalLibraryRound;
  sectionIcon = matHiveRound;
  levelsIcon = matStairsRound;
  schoolYearIcon = matDateRangeRound;
  subjectsIcon = matAutoStoriesRound;
}
