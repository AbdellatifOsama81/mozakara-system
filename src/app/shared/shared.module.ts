import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSubjectCardComponent } from './cards/landing-subject-card/landing-subject-card.component';
import { SubjectInfoComponent } from './cards/subject-info/subject-info.component';
import { SelectComponent } from './input/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarImgComponent } from './images/avatar-img/avatar-img.component';
import { RatingStarsComponent } from './other/rating-stars/rating-stars.component';
import { CoreModule } from "../core/core.module";
import { InputRatingStarsComponent } from './input/input-rating-stars/input-rating-stars.component';
import { TextAreaComponent } from './input/text-area/text-area.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';

@NgModule({
    declarations: [
        LandingSubjectCardComponent,
        SubjectInfoComponent,
        SelectComponent,
        AvatarImgComponent,
        RatingStarsComponent,
        InputRatingStarsComponent,
        TextAreaComponent,
        RoundedButtonComponent,
    ],
    exports: [
        LandingSubjectCardComponent,
        SubjectInfoComponent,
        SelectComponent,
        AvatarImgComponent,
        RatingStarsComponent,
        InputRatingStarsComponent,
        TextAreaComponent,
        RoundedButtonComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoreModule
    ]
})
export class SharedModule { }
