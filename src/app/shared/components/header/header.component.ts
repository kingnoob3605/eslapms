import { Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAuthUser,
  selectAuthUserRole,
  selectIsAuthenticated,
} from '../../../store/auth/auth.selector';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroUserCircleSolid, heroBars4Solid } from '@ng-icons/heroicons/solid';
import {
  matInfoRound,
  matNewspaperRound,
  matHomeRound,
  matPersonAddAlt1Round,
} from '@ng-icons/material-icons/round';
import {
  collapseSidebar,
  expandSidebar,
  hideSidebar,
} from '../../../store/sidebar/sidebar.actions';
import { selectSidebarStatus } from '../../../store/sidebar/sidebar.selector';
import { SidebarStatus } from '../../../store/sidebar/sidebar.state';
import { AccountControlsComponent } from '../account-controls/account-controls.component';
import { selectAccountControlsState } from '../account-controls/store/account-controls.selector';
import {
  hideAccountControls,
  showAccountControls,
} from '../account-controls/store/account-controls.actions';
import { BreakpointObserver } from '@angular/cdk/layout';
import { breakpoints } from '../../utils/breakpoints';
import { OutsideClickDirective } from '../../directives/outside-click.directive';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgIcon,
    AccountControlsComponent,
    OutsideClickDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private store = inject(Store);
  public router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);

  role = this.store.selectSignal(selectAuthUserRole);

  isAuthenticated = this.store.selectSignal(selectIsAuthenticated);

  sidebarStatus = this.store.selectSignal(selectSidebarStatus);

  accountControlsState = this.store.selectSignal(selectAccountControlsState);

  user = this.store.selectSignal(selectAuthUser);
  hasActiveRole = computed(
    () => this.user()?.roles?.some((role) => role.is_active) ?? false,
  );

  isHandset = signal(false);

  accountIcon = heroUserCircleSolid;
  sidebarIcon = heroBars4Solid;
  dashboardIcon = matHomeRound;
  infoIcon = matInfoRound;
  newsIcon = matNewspaperRound;
  registerIcon = matPersonAddAlt1Round;

  constructor() {
    this.breakpointObserver
      .observe([breakpoints.sm, breakpoints.md])
      .subscribe((result) => {
        const isSm = result.breakpoints[breakpoints.sm];
        const isMd = result.breakpoints[breakpoints.md];

        if (isMd || isSm) {
          this.isHandset.set(true);
        } else {
          this.isHandset.set(false);
        }
      });
  }

  toggleSidebar() {
    if (
      this.sidebarStatus() === SidebarStatus.collapsed ||
      this.sidebarStatus() === SidebarStatus.hidden
    ) {
      this.store.dispatch(expandSidebar());
    } else {
      if (this.isHandset()) {
        this.store.dispatch(hideSidebar());
      } else {
        this.store.dispatch(collapseSidebar());
      }
    }
  }

  toggleAccountControls() {
    if (this.accountControlsState().isShown) {
      this.store.dispatch(hideAccountControls());
    } else {
      this.store.dispatch(showAccountControls());
    }
  }

  hideAccountControls() {
    if (this.accountControlsState().isShown) {
      this.store.dispatch(hideAccountControls());
    }
  }
}
