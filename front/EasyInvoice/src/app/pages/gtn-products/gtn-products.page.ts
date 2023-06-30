import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gtn-products',
  templateUrl: './gtn-products.page.html',
  styleUrls: ['./gtn-products.page.scss'],
})
export class GtnProductsPage implements OnInit {

  items: any[];

  constructor(private toastController: ToastController, private http: HttpClient) {

    this.items = [];

   }

  ngOnInit() {
  }

  loadDataList() {
    
  }

  getItems(): Observable<any[]> {
    const url = "";
    return this.http.get<any[]>(url);
  }


  eliminarItem(item: any) {

  }

  editarItem(item: any) {

  }

  mostrarDetalle(item: any) {

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
