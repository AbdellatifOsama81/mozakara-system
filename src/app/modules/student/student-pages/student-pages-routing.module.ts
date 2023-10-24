import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPagesComponent } from './student-pages.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPagesComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'in-progress', loadChildren: () => import('./in-progress-subjects/in-progress-subjects.module').then(m => m.InProgressSubjectsModule) },
      { path: 'completed-subjects', loadChildren: () => import('./completed-subjects/completed-subjects.module').then(m => m.CompletedSubjectsModule) },
      { path: 'tests', loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule) },
      { path: 'followers', loadChildren: () => import('./followers/followers.module').then(m => m.FollowersModule) }
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPagesRoutingModule { }
