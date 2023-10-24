import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InProgressSubjectsRoutingModule } from './in-progress-subjects-routing.module';
import { InProgressSubjectsComponent } from './in-progress-subjects.component';
import { StudentPagesModule } from '../student-pages.module';


@NgModule({
  declarations: [
    InProgressSubjectsComponent
  ],
  imports: [
    CommonModule,
    InProgressSubjectsRoutingModule,
    StudentPagesModule
  ]
})
export class InProgressSubjectsModule { }
