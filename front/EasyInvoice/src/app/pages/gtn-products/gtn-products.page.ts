import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gtn-products',
  templateUrl: './gtn-products.page.html',
  styleUrls: ['./gtn-products.page.scss'],
})
export class GtnProductsPage implements OnInit {

  items: any[] = [
    { id: 1, name: 'Item 1', description: 'Descripción del Item 1' },
    { id: 2, name: 'Item 2', description: 'Descripción del Item 2' },
    { id: 3, name: 'Item 3', description: 'Descripción del Item 3' },
  ];

  constructor(private toastController: ToastController, private http: HttpClient,
    private alertController: AlertController) {

    //this.items = [];

   }

  ngOnInit() {
  }

  loadDataList() {
    
  }

  getItems(): Observable<any[]> {
    const url = "";
    return this.http.get<any[]>(url);
  }


  deleteItem(item: any) {

  }

  editItem(item: any) {

  }

  async showDetail(item: any) {
    const alert = await this.alertController.create({
      header: 'Detalles',
      message: `Nombre: ${item.name}<br>Descripción: ${item.description}`,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
