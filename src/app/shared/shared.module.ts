import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputPasswordComponent } from './custom-input-password/custom-input-password.component';
import { CustomInputSelectComponent } from './custom-input-select/custom-input-select.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    CustomInputPasswordComponent,
    CustomInputSelectComponent
  ],
  exports:[
    CustomInputComponent,
    CustomInputPasswordComponent,
    CustomInputSelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
