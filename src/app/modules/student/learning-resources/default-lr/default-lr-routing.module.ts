import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLrComponent } from './default-lr.component';

const routes: Routes = [{ path: '', component: DefaultLrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLrRoutingModule { }
