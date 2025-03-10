import { Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { BaseRegisterForm, InputFormControl } from '../interface/register.interface';

@Injectable()
export abstract class BaseRegisterComponent<T extends BaseRegisterForm> implements OnInit {
  @Input() formData!: Partial<T>;
  @Input() formControls!: InputFormControl[];
  registerForm!: FormGroup;
  constructor(protected fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: Partial<T>): void {
    this.registerForm = this.createFormGroup(this.formControls);
  }

  createFormGroup<T>(controls: InputFormControl[]): FormGroup {
    const group: { [key: string]: FormControl } = {};
    controls.forEach(control => {
      group[control.key as string] = new FormControl(control.value, control.validators);
    });
    return new FormGroup(group);
  }

  abstract onSubmit(): void;
}