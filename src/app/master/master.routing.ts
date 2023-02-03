import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'product', loadChildren: () => import('./product/product.module').then(x => x.ProductModule) },
];

export const masterRoutes = RouterModule.forChild(routes);
