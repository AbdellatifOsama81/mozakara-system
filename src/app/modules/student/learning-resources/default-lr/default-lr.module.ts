import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLrRoutingModule } from './default-lr-routing.module';
import { DefaultLrComponent } from './default-lr.component';
import { TeacherInfoComponent } from './sections/teacher-info/teacher-info.component';
import { LrAllRatingsComponent } from './sections/lr-all-ratings/lr-all-ratings.component';
import { LrFeedbackComponent } from './sections/lr-feedback/lr-feedback.component';
import { DescriptionRatingSectionComponent } from './sections/description-rating-section/description-rating-section.component';
import { CommentComponent } from './components/comment/comment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { LearningResourcesModule } from '../learning-resources.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { StudentSharedModule } from '../../student-shared/student-shared.module';


@NgModule({
  declarations: [
    DefaultLrComponent,
    TeacherInfoComponent,
    LrAllRatingsComponent,
    LrFeedbackComponent,
    DescriptionRatingSectionComponent,
    CommentComponent,
    AddCommentComponent

  ],
  imports: [
    CommonModule,
    DefaultLrRoutingModule,
    SharedModule,
    CoreModule,
    LearningResourcesModule,
    ReactiveFormsModule,
    StudentSharedModule
  ],
  exports: [
    TeacherInfoComponent,
    LrAllRatingsComponent,
    LrFeedbackComponent,
    DescriptionRatingSectionComponent,
    CommentComponent,

  ]
})
export class DefaultLrModule { }
