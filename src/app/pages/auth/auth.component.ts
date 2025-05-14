import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, ButtonComponent, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
