import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { profileRoutes } from './profile.routing';

@NgModule({
  imports: [
    profileRoutes,
    CommonModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
