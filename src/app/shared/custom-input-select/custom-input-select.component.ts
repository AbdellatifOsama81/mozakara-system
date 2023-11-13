import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input-select',
  templateUrl: './custom-input-select.component.html',
  styleUrls: ['./custom-input-select.component.scss']
})
export class CustomInputSelectComponent {
  @Input() label! : string ;
  @Input() control!: FormControl;
  @Input() options: { value: any, label: string }[] = [];
  @Input() formControlNameInput!: string;
  @Input() formGroupInput!: FormGroup;
  
  get formControl(): FormControl {
    return this.formGroupInput.get(this.formControlNameInput) as FormControl;
  }
}
