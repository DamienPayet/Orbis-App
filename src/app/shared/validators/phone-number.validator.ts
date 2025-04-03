import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phone = control.value;
    if (!phone) return null;

    const regex = /^(\+?\d{1,3})?[-.\s]?(\d{9,15})$/;
    return regex.test(phone) ? null : { invalidPhoneNumber: true };
  };
}
