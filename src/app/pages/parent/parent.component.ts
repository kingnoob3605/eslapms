import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import {
  matHomeRound,
  matLocalLibraryRound,
  matSettingsRound,
} from '@ng-icons/material-icons/round';
import { SidebarItemComponent } from '../../shared/components/sidebar-item/sidebar-item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [SidebarComponent, SidebarItemComponent, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  homeIcon = matHomeRound;
  settingsIcon = matSettingsRound;
  studentIcon = matLocalLibraryRound;
}
