import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedSubjectsComponent } from './completed-subjects.component';

const routes: Routes = [{ path: '', component: CompletedSubjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedSubjectsRoutingModule { }
