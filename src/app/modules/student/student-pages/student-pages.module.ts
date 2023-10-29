import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPagesRoutingModule } from './student-pages-routing.module';
import { StudentPagesComponent } from './student-pages.component';
import { StudentSharedModule } from '../student-shared/student-shared.module';
import { ArrowButtonsComponent } from './components/arrow-buttons/arrow-buttons.component';
import { SubjectVerticalCardComponent } from './components/subject-vertical-card/subject-vertical-card.component';
import { SubjectSearchComponent } from './components/subject-search/subject-search.component';
import { SubjectHorizontalCardComponent } from './components/subject-horizontal-card/subject-horizontal-card.component';
import { SubjectInfoComponent } from './components/subject-info/subject-info.component';
import { SubjectProgressComponent } from './components/subject-progress/subject-progress.component';
import { SubjectContentListComponent } from './components/subject-content-list/subject-content-list.component';
import { SubjectContentItemComponent } from './components/subject-content-item/subject-content-item.component';
import { ToggleViewButtonsComponent } from './components/toggle-view-buttons/toggle-view-buttons.component';
import { ImgContainerComponent } from './components/img-container/img-container.component';


@NgModule({
  declarations: [
    StudentPagesComponent,
    ArrowButtonsComponent,
    SubjectVerticalCardComponent,
    SubjectSearchComponent,
    SubjectHorizontalCardComponent,
    SubjectInfoComponent,
    SubjectProgressComponent,
    SubjectContentListComponent,
    SubjectContentItemComponent,
    ToggleViewButtonsComponent,
    ImgContainerComponent
  ],
  imports: [
    CommonModule,
    StudentPagesRoutingModule,
    StudentSharedModule
  ],
  exports: [
    ArrowButtonsComponent,
    SubjectVerticalCardComponent,
    SubjectSearchComponent,
    SubjectHorizontalCardComponent,
    SubjectInfoComponent,
    SubjectProgressComponent,
    SubjectContentListComponent,
    SubjectContentItemComponent,
    ToggleViewButtonsComponent,
    ImgContainerComponent
  ]
})
export class StudentPagesModule { }
