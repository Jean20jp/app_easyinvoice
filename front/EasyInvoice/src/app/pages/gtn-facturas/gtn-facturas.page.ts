import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonModal } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-gtn-facturas',
  templateUrl: './gtn-facturas.page.html',
  styleUrls: ['./gtn-facturas.page.scss'],
})
export class GtnFacturasPage implements OnInit {

  @ViewChild('modalDtFact') modalDtFact!: IonModal;

  items: any[] = [];
  private listWithOutFilter: any[] = [];
  @ViewChild('modalForm') modalForm!: IonModal;

  selectedTipPago: any;
  optionsTipPago: any[] = ["Transferencia", "Deposito", "Efectivo"];

  listFilterClient: any[] = [];
  listAllClients!: any[];

  selectedItem!: any;
  showBackdrop: boolean = false;

  constructor(private alertController: AlertController, private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentAlert(item: any) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar el cliente?',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Sí',
          cssClass: 'alert-button-confirm',
          handler: () => {
            //this.deleteClient(item);
          }
        },
      ]
    });

    await alert.present();
  }

  archivarItem(item: any) {
    this.presentAlert(item);
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value;
    if (searchTerm.trim() !== '') {
      this.items = this.items.filter(item =>
        item.num_comprob.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.items = this.listWithOutFilter;
    }
  }
  
  filterListClients(event: any) {
    const filtro = event.target.value.toLowerCase();
    this.listFilterClient = this.listAllClients.filter(item => {
      return item.num_ident.toLowerCase().includes(filtro);
    });
  }

  emitirCompr(){}

  openModalDtFact(item: any) {
    this.selectedItem = item;
    this.modalDtFact.present();
  }

  openModalFact() {
    this.modalForm.present();
  }

  goBack() {
    this.closeModalForm();
  }

  closeModalForm() {
    //this.clearInputs();
    this.modalForm.dismiss();
  }

  clearSelectionTipPago() {
    this.selectedTipPago = null;
  }

}
