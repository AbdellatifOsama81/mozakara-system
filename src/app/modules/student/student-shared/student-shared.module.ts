import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoCardComponent } from './student-info-card/student-info-card.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentInfoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    StudentInfoCardComponent
  ]
})
export class StudentSharedModule { }
