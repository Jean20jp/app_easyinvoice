import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gtn-products',
    loadChildren: () => import('./pages/gtn-products/gtn-products.module').then( m => m.GtnProductsPageModule)
  },  {
    path: 'gtn-client',
    loadChildren: () => import('./pages/gtn-client/gtn-client.module').then( m => m.GtnClientPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
