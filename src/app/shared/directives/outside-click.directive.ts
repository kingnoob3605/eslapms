import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
  standalone: true,
})
export class OutsideClickDirective {
  private elementRef = inject(ElementRef);

  @Output() appOutsideClick = new EventEmitter<void>();
  @Input() appOutsideClickEnabled = true;

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside && this.appOutsideClickEnabled) {
      this.appOutsideClick.emit();
    }
  }
}
