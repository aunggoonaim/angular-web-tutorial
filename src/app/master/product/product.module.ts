import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { productRoutes } from './product.routing';
import { ProductService } from './product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    productRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductComponent, ProductEditComponent],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
