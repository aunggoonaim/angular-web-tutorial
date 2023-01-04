import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { layoutRoutes } from './layout.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    layoutRoutes,
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule { }
