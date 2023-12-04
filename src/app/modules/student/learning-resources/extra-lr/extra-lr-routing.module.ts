import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraLrComponent } from './extra-lr.component';

const routes: Routes = [{ path: '', component: ExtraLrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraLrRoutingModule { }
