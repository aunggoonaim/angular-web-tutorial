import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: ':id', component: ProductEditComponent },
];

export const productRoutes = RouterModule.forChild(routes);
