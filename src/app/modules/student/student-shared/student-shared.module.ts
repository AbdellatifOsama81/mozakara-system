import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoCardComponent } from './student-info-card/student-info-card.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentPagesLinksComponent } from './student-pages-links/student-pages-links.component';
import { StudentPagesLinksScrollComponent } from './student-pages-links-scroll/student-pages-links-scroll.component';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';
import { PagesBreadcrumbComponent } from './pages-breadcrumb/pages-breadcrumb.component';



@NgModule({
  declarations: [
    StudentInfoCardComponent,
    StudentPagesLinksComponent,
    StudentPagesLinksScrollComponent,
    ProgressStepperComponent,
    PagesBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    StudentInfoCardComponent,
    StudentPagesLinksScrollComponent,
    ProgressStepperComponent,
    PagesBreadcrumbComponent
  ]
})
export class StudentSharedModule { }
