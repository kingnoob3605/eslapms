import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectAuthUser,
  selectIsAuthenticated,
} from './store/auth/auth.selector';
import { initAuth } from './store/auth/auth.actions';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { selectSidebarStatus } from './store/sidebar/sidebar.selector';
import { SidebarStatus } from './store/sidebar/sidebar.state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eslapms';

  private store = inject(Store);
  public router = inject(Router);

  isAuthenticated = this.store.selectSignal(selectIsAuthenticated);
  user = this.store.selectSignal(selectAuthUser);

  sidebarStatus = this.store.selectSignal(selectSidebarStatus);
  SidebarStatus = SidebarStatus;

  constructor() {
    this.store.dispatch(initAuth());
  }
}
