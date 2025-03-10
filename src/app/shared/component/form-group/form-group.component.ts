import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
})
export class FormGroupComponent {

  @Input() title: string = 'Formulario';
  @Input() formGroup!: FormGroup;
  @Input() formControls!: { key: string; type: string }[];
  @Input() buttonLabel: string = 'Registrar';
  @Output() onSubmit = new EventEmitter<any>();

  handleSubmit(): void {
    if (this.formGroup.valid) {
      this.onSubmit.emit(this.formGroup.value);
    }
  }
}
