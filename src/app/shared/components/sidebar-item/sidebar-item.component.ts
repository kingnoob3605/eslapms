import { Component, inject, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { SidebarStatus } from '../../../store/sidebar/sidebar.state';
import { selectSidebarStatus } from '../../../store/sidebar/sidebar.selector';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [NgIcon, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css',
})
export class SidebarItemComponent {
  private store = inject(Store);
  public router = inject(Router);

  SidebarStatus = SidebarStatus;
  sidebarStatus = this.store.selectSignal(selectSidebarStatus);

  @Input() icon: any;
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() routerLink: string = '';

  // Check if the current route matches this sidebar item
  get isActive(): boolean {
    return this.router.url.includes(this.routerLink);
  }
}
