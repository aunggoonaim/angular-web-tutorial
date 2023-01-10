import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'u', pathMatch: 'full' },
  { path: 'u', loadChildren: () => import('./layout/layout.module').then(x => x.LayoutModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
