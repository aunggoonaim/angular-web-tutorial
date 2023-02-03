import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { masterRoutes } from './master.routing';

@NgModule({
  imports: [
    masterRoutes,
    CommonModule
  ],
  declarations: []
})
export class MasterModule { }
