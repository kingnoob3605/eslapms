import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLinkActive],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: string = 'submit';
  @Input() disabled: boolean = false;
  @Input() routerLinkActive: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
