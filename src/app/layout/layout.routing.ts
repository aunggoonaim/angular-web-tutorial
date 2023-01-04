import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', loadChildren: () => import('../home/home.module').then(x => x.HomeModule) },
      { path: 'profile', loadChildren: () => import('../profile/profile.module').then(x => x.ProfileModule) }
    ]
  }
];

export const layoutRoutes = RouterModule.forChild(routes);
