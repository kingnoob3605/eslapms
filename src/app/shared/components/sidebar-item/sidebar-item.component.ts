import { Component, inject, input, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { matSpaceDashboardRound } from '@ng-icons/material-icons/round';
import { Store } from '@ngrx/store';
import { SidebarStatus } from '../../../store/sidebar/sidebar.state';
import { selectSidebarStatus } from '../../../store/sidebar/sidebar.selector';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [NgIcon, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css',
})
export class SidebarItemComponent {
  private store = inject(Store);
  SidebarStatus = SidebarStatus;
  sidebarStatus = this.store.selectSignal(selectSidebarStatus);

  dashboardIcon = matSpaceDashboardRound;

  @Input() icon: any;
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() routerLink: string = '';
}
