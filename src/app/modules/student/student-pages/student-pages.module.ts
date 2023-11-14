import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPagesRoutingModule } from './student-pages-routing.module';
import { StudentPagesComponent } from './student-pages.component';
import { StudentSharedModule } from '../student-shared/student-shared.module';
import { ArrowButtonsComponent } from './components/arrow-buttons/arrow-buttons.component';
import { SubjectVerticalCardComponent } from './components/subject-vertical-card/subject-vertical-card.component';
import { SubjectSearchComponent } from './components/subject-search/subject-search.component';
import { SubjectHorizontalCardComponent } from './components/subject-horizontal-card/subject-horizontal-card.component';
import { SubjectProgressComponent } from './components/subject-progress/subject-progress.component';
import { SubjectContentListComponent } from './components/subject-content-list/subject-content-list.component';
import { SubjectContentItemComponent } from './components/subject-content-item/subject-content-item.component';
import { ToggleViewButtonsComponent } from './components/toggle-view-buttons/toggle-view-buttons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubjectCardGridComponent } from './components/subject-card-grid/subject-card-grid.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentPagesComponent,
    ArrowButtonsComponent,
    SubjectVerticalCardComponent,
    SubjectSearchComponent,
    SubjectHorizontalCardComponent,
    SubjectProgressComponent,
    SubjectContentListComponent,
    SubjectContentItemComponent,
    ToggleViewButtonsComponent,
    SubjectCardGridComponent,
  ],
  imports: [
    CommonModule,
    StudentPagesRoutingModule,
    StudentSharedModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ArrowButtonsComponent,
    SubjectVerticalCardComponent,
    SubjectSearchComponent,
    SubjectHorizontalCardComponent,
    SubjectProgressComponent,
    SubjectContentListComponent,
    SubjectContentItemComponent,
    ToggleViewButtonsComponent,
    SubjectCardGridComponent,
  ]
})
export class StudentPagesModule { }
