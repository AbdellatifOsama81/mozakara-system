import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { DiactivateAuthGuard } from '../shared/services/diactivate-auth.guard';

const routes: Routes = [
  { path: '', component: ModulesComponent }, 
  { path: 'student',canActivate:[AuthGuard], loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }, 
  { path: 'parent', canActivate:[AuthGuard], loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule) }, 
  { path: 'teacher',canActivate:[AuthGuard], loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'auth', canActivate:[DiactivateAuthGuard], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
