import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GtnFacturasPageRoutingModule } from './gtn-facturas-routing.module';

import { GtnFacturasPage } from './gtn-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GtnFacturasPageRoutingModule
  ],
  declarations: [GtnFacturasPage]
})
export class GtnFacturasPageModule {}
