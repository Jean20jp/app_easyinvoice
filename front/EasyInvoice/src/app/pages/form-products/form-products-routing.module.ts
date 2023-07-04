import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProductsPage } from './form-products.page';

const routes: Routes = [
  {
    path: '',
    component: FormProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProductsPageRoutingModule {}
