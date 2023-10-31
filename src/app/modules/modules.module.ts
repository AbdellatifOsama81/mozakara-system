import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModulesComponent  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
