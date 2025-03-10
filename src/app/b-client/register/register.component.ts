import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseRegisterComponent } from 'src/app/base/component/base-register.component';
import { BClientRegisterForm, InputFormControl } from 'src/app/base/interface/register.interface';
import { FormGroupComponent } from 'src/app/shared/component/form-group/form-group.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormGroupComponent],
})
export class BClientRegisterComponent extends BaseRegisterComponent<BClientRegisterForm> {

  override formControls: InputFormControl[] = [
    { key: 'email', value: '', validators: [Validators.required, Validators.email], type: 'email' },
    { key: 'name', value: '', validators: [Validators.required], type: 'text' },
    { key: 'password', value: '', validators: [Validators.required, Validators.minLength(6)], type: 'password' },
    { key: 'documentId', value: '', validators: [Validators.required], type: 'text' },
    { key: 'secretQuestion', value: '', validators: [Validators.required], type: 'text' }
  ];

  onSubmit(): void {
    if (this.registerForm.valid) {
      alert('Form B Valid, sending data to server');
    } else {
      alert('Form B Invalid');
    }
  }
}