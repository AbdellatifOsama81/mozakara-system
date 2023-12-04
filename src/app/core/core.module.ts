import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDifferencePipe } from './pipes/date-difference.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';



@NgModule({
  declarations: [
    DateDifferencePipe,
    ShortNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateDifferencePipe,
    ShortNumberPipe
  ]
})
export class CoreModule { }
