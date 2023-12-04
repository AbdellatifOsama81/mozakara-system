import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() parentFormGroup!: FormGroup;
  @Input() myFormControlName!:string;
  @Input() label!:string;
  @Input() defaultOption!:string;
  @Input() options!:string[];

}
