import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GtnFacturasPage } from './gtn-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: GtnFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GtnFacturasPageRoutingModule {}
