import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProductsPageRoutingModule } from './form-products-routing.module';

import { FormProductsPage } from './form-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProductsPageRoutingModule
  ],
  declarations: [FormProductsPage]
})
export class FormProductsPageModule {}
