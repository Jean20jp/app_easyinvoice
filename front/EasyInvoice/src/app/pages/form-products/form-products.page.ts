import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.page.html',
  styleUrls: ['./form-products.page.scss'],
})
export class FormProductsPage implements OnInit {

  cod_prod!: string;

  options!: any[];
  selectedOption: any;

  constructor() { }

  ngOnInit() {
  }

  clearSelection() {
    this.selectedOption = null; 
  }

}
