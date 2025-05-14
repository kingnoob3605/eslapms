import { NgIf } from '@angular/common';
import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() id: string = 'text';
  @Input() placeholder: string = 'text';
  @Input() required: boolean = false;

  private controlContainer = inject(ControlContainer);

  get control() {
    return this.controlContainer.control?.get(this.id);
  }

  value: string = '';
  disabled: boolean = false;

  onChanged = (value: string) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.onChanged(value);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChanged(this.value);
  }

  onInputBlur(): void {
    this.onTouched();
  }
}
