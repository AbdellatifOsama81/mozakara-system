import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  
  @Input() label! : string ;
  @Input() type = 'text' ;
  @Input() formControlNameInput!: string;
  @Input() formGroupInput!: FormGroup;
  
  get formControl(): FormControl {
    return this.formGroupInput.get(this.formControlNameInput) as FormControl;
  }
}

