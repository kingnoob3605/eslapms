import { Component, inject, signal, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSidebarStatus } from '../../../store/sidebar/sidebar.selector';
import { CommonModule } from '@angular/common';
import { SidebarStatus } from '../../../store/sidebar/sidebar.state';
import { breakpoints } from '../../utils/breakpoints';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  collapseSidebar,
  expandSidebar,
  hideSidebar,
} from '../../../store/sidebar/sidebar.actions';
import { Subject, takeUntil } from 'rxjs';
import { OutsideClickDirective } from '../../directives/outside-click.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, OutsideClickDirective],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnDestroy {
  private store = inject(Store);
  private breakpointObserver = inject(BreakpointObserver);
  private destroy$ = new Subject<void>();
  public router = inject(Router);

  SidebarStatus = SidebarStatus;
  sidebarStatus = this.store.selectSignal(selectSidebarStatus);

  isHandset = signal(false);

  constructor() {
    this.breakpointObserver
      .observe([
        breakpoints.sm,
        breakpoints.md,
        breakpoints.lg,
        breakpoints.xl,
        breakpoints.xxl,
      ])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        const isSm = result.breakpoints[breakpoints.sm];
        const isMd = result.breakpoints[breakpoints.md];
        const isLg = result.breakpoints[breakpoints.lg];
        const isXl = result.breakpoints[breakpoints.xl];
        const isXxl = result.breakpoints[breakpoints.xxl];

        if (isMd || isSm) {
          this.isHandset.set(true);
          this.store.dispatch(hideSidebar());
        } else if (isLg) {
          this.isHandset.set(false);
          this.store.dispatch(collapseSidebar());
        } else if (isXl || isXxl) {
          this.isHandset.set(false);
          this.store.dispatch(expandSidebar());
        }
      });
  }

  hideSidebar() {
    if (this.sidebarStatus() !== SidebarStatus.hidden && this.isHandset()) {
      this.store.dispatch(hideSidebar());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
