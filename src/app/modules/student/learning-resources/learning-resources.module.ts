import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningResourcesRoutingModule } from './learning-resources-routing.module';
import { LearningResourcesComponent } from './learning-resources.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubjectPlanCardComponent } from './components/subject-plan-card/subject-plan-card.component';
import { LrInfoComponent } from './components/lr-info/lr-info.component';
import { LrSubjectSummaryComponent } from './components/lr-subject-summary/lr-subject-summary.component';
import { LrShareComponent } from './components/lr-share/lr-share.component';
import { RatingPercentageComponent } from './default-lr/components/rating-percentage/rating-percentage.component';
import { CoreModule } from 'src/app/core/core.module';
import { LrDescriptionComponent } from './components/lr-description/lr-description.component';
import { LrMaterialComponent } from './components/lr-material/lr-material.component';
import { LrVideoComponent } from './components/lr-video/lr-video.component';
import { LrDocumentComponent } from './components/lr-document/lr-document.component';
import { LrLinksComponent } from './components/lr-links/lr-links.component';
import { SubjectPlanComponent } from './components/subject-plan/subject-plan.component';
import { UnitPlanComponent } from './components/unit-plan/unit-plan.component';
import { TopicPlanComponent } from './components/topic-plan/topic-plan.component';
import { LrPlanComponent } from './components/lr-plan/lr-plan.component';
import { LrImageComponent } from './components/lr-image/lr-image.component';
import { DefaultLrComponent } from './default-lr/default-lr.component';

@NgModule({
  declarations: [
    LearningResourcesComponent,
    SubjectPlanCardComponent,
    LrInfoComponent,
    LrSubjectSummaryComponent,
    LrShareComponent,
    RatingPercentageComponent,
    LrDescriptionComponent,
    LrMaterialComponent,
    LrVideoComponent,
    LrDocumentComponent,
    LrLinksComponent,
    SubjectPlanComponent,
    UnitPlanComponent,
    TopicPlanComponent,
    LrPlanComponent,
    LrImageComponent,
  ],
  imports: [
    CommonModule,
    LearningResourcesRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    SubjectPlanCardComponent,
    LrInfoComponent,
    LrSubjectSummaryComponent,
    LrShareComponent,
    RatingPercentageComponent,
    LrDescriptionComponent,
    LrMaterialComponent,
    LrVideoComponent,
    LrDocumentComponent,
    LrLinksComponent,
    SubjectPlanComponent,
    UnitPlanComponent,
    TopicPlanComponent,
    LrPlanComponent,
    LrImageComponent,
  ]
})
export class LearningResourcesModule { }
