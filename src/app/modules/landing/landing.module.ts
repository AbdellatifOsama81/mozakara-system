import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { LandingSubjectsSectionComponent } from './sections/landing-subjects-section/landing-subjects-section.component';
import { BannerSectionComponent } from './sections/banner-section/banner-section.component';
import { StartNowBannerSectionComponent } from './sections/start-now-banner-section/start-now-banner-section.component';
import { OurTeachersSectionComponent } from './sections/our-teachers-section/our-teachers-section.component';
import { ReviewsSectionComponent } from './sections/reviews-section/reviews-section.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { ServicesCardComponent } from './components/services-card/services-card.component';
import { SideHeadingComponent } from './components/side-heading/side-heading.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    LandingSubjectsSectionComponent,
    BannerSectionComponent,
    StartNowBannerSectionComponent,
    OurTeachersSectionComponent,
    ReviewsSectionComponent,
    ServicesCardComponent,
    TeacherCardComponent,
    ReviewCardComponent,
    SideHeadingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  exports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    LandingSubjectsSectionComponent,
    BannerSectionComponent,
    StartNowBannerSectionComponent,
    OurTeachersSectionComponent,
    ReviewsSectionComponent,
    ServicesCardComponent,
    TeacherCardComponent,
    ReviewCardComponent,
    SideHeadingComponent
  ]
})
export class LandingModule { }
