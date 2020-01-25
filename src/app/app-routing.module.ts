import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import { AuthGuard } from './shared/guards/can-activate/auth.guard';

const routes: Routes = [
  {
        path: '', canActivate: [AuthGuard],
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/layout.module').then(m => m.AppLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
