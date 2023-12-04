import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: 'pages', loadChildren: () => import('./student-pages/student-pages.module').then(m => m.StudentPagesModule) },
      { path: 'learning-resource', loadChildren: () => import('./learning-resources/learning-resources.module').then(m => m.LearningResourcesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
