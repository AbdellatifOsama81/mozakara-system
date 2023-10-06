import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [{ path: '', component: ModulesComponent }, { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }, { path: 'parent', loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule) }, { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
