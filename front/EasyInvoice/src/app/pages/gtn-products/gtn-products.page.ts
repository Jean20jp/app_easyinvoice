import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController, AlertController, ModalController, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-gtn-products',
  templateUrl: './gtn-products.page.html',
  styleUrls: ['./gtn-products.page.scss'],
})
export class GtnProductsPage implements OnInit {

  codigo_barras!: string;
  nom_producto!: string;
  descrip_prod!: string;
  id_prom_pro!: string;
  id_cat_pro!: string;
  unidades_dispon!: string;
  precio!: string;

  @ViewChild('modalForm') modalForm!: IonModal;
  @ViewChild('modalDtProd') modalDtProd!: IonModal;

  showBackdrop: boolean = false;

  items: any[] = [
    { id: 1, name: 'Item 1', description: 'Descripción del Item 1' },
    { id: 2, name: 'Item 2', description: 'Descripción del Item 2' },
    { id: 3, name: 'Item 3', description: 'Descripción del Item 3' },
  ];

  selectedItems: any[] = [];

  titleModalForm!: string;
  nameBtnModalForm!: string;

  optionsCateg!: any[];
  optionsIva!: any[];
  optionsProm!: any[];
  selectedOption: any;

  constructor(private toastController: ToastController, private http: HttpClient, private route: ActivatedRoute,
    private alertController: AlertController, private modalController: ModalController, private navCtrl: NavController) {

      this.recoverCategories();
      this.recoverCategIva();
      this.recoverCategProm();

  }

  openModalForm() {
    this.modalForm.present();
  }

  closeModalForm() {
    this.modalForm.dismiss()
  }

  openModalDtProd() {
    this.modalDtProd.present();
  }

  closeModalDtProd() {
    this.modalDtProd.dismiss()
  }

  addProducts() {
    this.titleModalForm = "Nuevo Producto";
    this.nameBtnModalForm = "Crear Producto";
    this.openModalForm();
  }

  updateProducts() {
    this.titleModalForm = "Modificar Producto";
    this.nameBtnModalForm = "Modificar Producto";
    this.openModalForm();
  }

  selectItem(item: any) {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1); // Deseleccionar elemento si ya está seleccionado
    } else {
      this.selectedItems.push(item); // Seleccionar elemento si no está seleccionado
    }
  }

  isSelected(item: any): boolean {
    return this.selectedItems.indexOf(item) > -1;
  }

  vender() {
    // Aquí puedes capturar la información de los elementos seleccionados y realizar las acciones necesarias
    console.log(this.selectedItems);
  }

  ngOnInit() {
    
  }

  recoverCategories() {
    const url = "http://localhost:8080/category";
    this.http.get<any[]>(url).subscribe(
      (response) => {
        if (response !== null) {
          this.optionsCateg = this.cleanOptions(response, "nom_categ");
        }
      },
      (error) => {
        console.error('Error al recuperar ciudades:', error);
      }
    );
  }

  recoverCategIva() {
    const url = "http://localhost:8080/iva";
    this.http.get<any[]>(url).subscribe(
      (response) => {
        if (response !== null) {
          this.optionsIva = this.cleanOptions(response, "nomb_categ_iva");
        }
      },
      (error) => {
        console.error('Error al recuperar ciudades:', error);
      }
    );
  }

  recoverCategProm() {
    const url = "http://localhost:8080/promotion";
    this.http.get<any[]>(url).subscribe(
      (response) => {
        if (response !== null) {
          this.optionsProm = this.cleanOptions(response, "nom_prom");
        }
      },
      (error) => {
        console.error('Error al recuperar ciudades:', error);
      }
    );
  }

  cleanOptions(response: any, propertyName: string): any[] {
    const listCities: any[] = [];
    const seenProperties: Set<any> = new Set();
    for (const json of response) {
      const property = json[propertyName];
      if (!seenProperties.has(property)) {
        seenProperties.add(property);
        listCities.push(property);
      }
    }
    return listCities;
  }


  clearSelection() {
    this.selectedOption = null;
  }

  goBack() {
    this.closeModalForm();
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
    this.updateProducts()
  }

  toggleBackdrop() {
    this.showBackdrop = !this.showBackdrop;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
