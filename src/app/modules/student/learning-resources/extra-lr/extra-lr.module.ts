import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraLrRoutingModule } from './extra-lr-routing.module';
import { ExtraLrComponent } from './extra-lr.component';
import { LearnMoreSubjectsComponent } from './components/learn-more-subjects/learn-more-subjects.component';
import { RelatedTeachersComponent } from './components/related-teachers/related-teachers.component';
import { FollowTeacherCardComponent } from './components/follow-teacher-card/follow-teacher-card.component';
import { LearningResourcesModule } from '../learning-resources.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CircularArrowButtonsComponent } from './components/circular-arrow-buttons/circular-arrow-buttons.component';


@NgModule({
  declarations: [
    ExtraLrComponent,
    LearnMoreSubjectsComponent,
    RelatedTeachersComponent,
    FollowTeacherCardComponent,
    CircularArrowButtonsComponent,
  ],
  imports: [
    CommonModule,
    ExtraLrRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    LearnMoreSubjectsComponent,
    RelatedTeachersComponent,
    FollowTeacherCardComponent,
    CircularArrowButtonsComponent,
  ]
})
export class ExtraLrModule { }
