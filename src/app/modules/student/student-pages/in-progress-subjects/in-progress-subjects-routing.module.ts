import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InProgressSubjectsComponent } from './in-progress-subjects.component';

const routes: Routes = [{ path: '', component: InProgressSubjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InProgressSubjectsRoutingModule { }
