import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentSharedModule } from './student-shared/student-shared.module';
import { StudentPagesModule } from './student-pages/student-pages.module';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    StudentSharedModule,
    StudentPagesModule
  ]
})
export class StudentModule { }
