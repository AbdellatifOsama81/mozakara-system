import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { StudentTopNavBarComponent } from './student-top-nav-bar/student-top-nav-bar.component';
// import { StudentBottomNavBarComponent } from './student-bottom-nav-bar/student-bottom-nav-bar.component';
import { StudentInfoCardComponent } from './student-info-card/student-info-card.component';



@NgModule({
  declarations: [
    // StudentTopNavBarComponent,
    // StudentBottomNavBarComponent,
    StudentInfoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // StudentTopNavBarComponent,
    // StudentBottomNavBarComponent,
    StudentInfoCardComponent
  ]
})
export class StudentSharedModule { }
