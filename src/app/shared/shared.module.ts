import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSubjectCardComponent } from './landing-subject-card/landing-subject-card.component';
import { SubjectInfoComponent } from './subject-info/subject-info.component';
import { SelectComponent } from './select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarImgComponent } from './avatar-img/avatar-img.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    LandingSubjectCardComponent,
    SubjectInfoComponent,
    SelectComponent,
    AvatarImgComponent,
    RatingStarsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LandingSubjectCardComponent,
    SubjectInfoComponent,
    SelectComponent,
    AvatarImgComponent,
    RatingStarsComponent,
  ]
})
export class SharedModule { }
