import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input-password',
  templateUrl: './custom-input-password.component.html',
  styleUrls: ['./custom-input-password.component.scss']
})
export class CustomInputPasswordComponent {
  @Input() label! : string ;
  @Input() type!:string ;
  @Input() matchingValue!:boolean;
  @Input() formControlNameInput!: string;
  @Input() formGroupInput!: FormGroup;
  showPassword: boolean = false;
  
  get formControl(): FormControl {
    return this.formGroupInput.get(this.formControlNameInput) as FormControl;
  }
  togglePassword() {
   // this.password = String(this.control)
    this.showPassword = !this.showPassword;
    
  }
  
}
