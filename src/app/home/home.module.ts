import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';

@NgModule({
  imports: [
    homeRoutes,
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
