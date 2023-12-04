import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningResourcesComponent } from './learning-resources.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LearningResourcesComponent,
    children: [
      { path: 'default', loadChildren: () => import('./default-lr/default-lr.module').then(m => m.DefaultLrModule) },
      { path: 'extra', loadChildren: () => import('./extra-lr/extra-lr.module').then(m => m.ExtraLrModule) },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningResourcesRoutingModule { }
