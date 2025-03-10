import { FormControl, FormGroup } from "@angular/forms";

export function createFormGroup<T>(controls: {
  key: keyof T;
  value: any;
  validators: any[];
}[]): FormGroup {
  const group: { [key: string]: FormControl } = {};
  controls.forEach(control => {
    group[control.key as string] = new FormControl(control.value, control.validators);
  });
  return new FormGroup(group);
}