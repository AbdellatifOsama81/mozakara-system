import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedSubjectsRoutingModule } from './completed-subjects-routing.module';
import { CompletedSubjectsComponent } from './completed-subjects.component';
import { StudentPagesModule } from '../student-pages.module';


@NgModule({
  declarations: [
    CompletedSubjectsComponent
  ],
  imports: [
    CommonModule,
    CompletedSubjectsRoutingModule,
    StudentPagesModule
  ]
})
export class CompletedSubjectsModule { }
