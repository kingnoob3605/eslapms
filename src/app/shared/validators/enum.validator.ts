import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function enumValidator(enumType: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const values = Object.values(enumType);
    return value === null || values.includes(value)
      ? null
      : { invalidEnumValue: true };
  };
}
