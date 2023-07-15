import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonModal } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-gtn-client',
  templateUrl: './gtn-client.page.html',
  styleUrls: ['./gtn-client.page.scss'],
})
export class GtnClientPage implements OnInit {

  @ViewChild('modalDtClie') modalDtClie!: IonModal;
  @ViewChild('modalForm') modalForm!: IonModal;

  showBackdrop: boolean = false;

  id_cliente!: string
  num_ident!: string;
  nomb_cli!: string;
  apell_cli!: string;
  email_cli!: string;
  direc_cli!: string;
  telef_cli!: string;

  itemsClieFilterAux: any[] = [];
  items: any[] = [];
  private listWithOutFilter: any[] = [];

  isDisabledInpTipDni!: boolean;
  isDisabledInpNumDni!: boolean;

  selectedItems: any[] = [];
  selectedItem!: any;

  titleModalForm!: string;
  nameBtnModalForm!: string;

  selectedTipDni: any;
  optionsTipDni: any[] = ["Cédula", "RUC", "Pasaporte"];

  constructor(private http: HttpClient, private toastController: ToastController) {
    this.loadClients();
  }

  ngOnInit() {
  }

  async alertInsertCorrectly() {
    const toast = await this.toastController.create({
      message: 'Cliente registrado correctamente',
      duration: 3000, // Duración en milisegundos
      position: 'bottom' // Posición del mensaje ('top', 'middle', o 'bottom')
    });
    toast.present();
  }

  async alertInputEmpty() {
    const toast = await this.toastController.create({
      message: 'Todos los campos son obligatorios',
      duration: 3000, // Duración en milisegundos
      position: 'bottom', // Posición del mensaje ('top', 'middle', o 'bottom')
      color: 'danger' // Color del mensaje de error
    });
    toast.present();
  }

  async alertNumIdent() {
    const toast = await this.toastController.create({
      message: 'El número de identificación ingresado ya existe',
      duration: 3000, // Duración en milisegundos
      position: 'bottom', // Posición del mensaje ('top', 'middle', o 'bottom')
      color: 'danger' // Color del mensaje de error
    });
    toast.present();
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

  openModalDtCliet(item: any) {
    this.selectedItem = item;
    this.modalDtClie.present();
  }

  openModalForm() {
    this.modalForm.present();
  }

  closeModalDtClient() {
    this.modalDtClie.dismiss();
  }

  closeModalForm() {
    this.clearInputs();     
    this.modalForm.dismiss();
  }

  clearInputs() {
    this.num_ident = "";
    this.nomb_cli = "";
    this.apell_cli = "";
    this.email_cli = "";
    this.direc_cli = "";
    this.telef_cli = "";
    this.clearSelection();
  }

  addProducts() {
    this.titleModalForm = "Registrar Cliente";
    this.nameBtnModalForm = "Registrar";
    this.isDisabledInpTipDni = false;
    this.isDisabledInpNumDni = false;
    this.openModalForm();
  }

  loadClients() {
    const url = 'http://localhost:8080/customer';
    this.http.get<any[]>(url).subscribe(
      (response) => {
        if (response !== null) {
          this.items = response;
          this.listWithOutFilter = this.items;
        }
      },
      (error) => {
        console.error('Error al recuperar ciudades:', error);
      }
    );
  }

  getIdTipDni(selectedTipDni: string) {
    if (selectedTipDni === "Cédula") {
      return 1;
    } else if (selectedTipDni === "RUC") {
      return 2;
    } else {
      return 3;
    }
  }

  isEmptyInput(num_ident: string, nomb_cli: string, apell_cli: string, email_cli: string,
    direc_cli: string, telef_cli: string, selectedTipDni: string) {

    if (!num_ident || !nomb_cli || !apell_cli || !email_cli || !direc_cli || !telef_cli
      || /^\s+|\s+$/g.test(num_ident) || /^\s+|\s+$/g.test(nomb_cli) || /^\s+|\s+$/g.test(apell_cli)
      || /^\s+|\s+$/g.test(email_cli) || /^\s+|\s+$/g.test(direc_cli) || /^\s+|\s+$/g.test(telef_cli)
      || selectedTipDni === null) {
      this.alertInputEmpty();
      return false;
    } else {
      return true;
    }
  }

  insertClient() {
    if (this.isEmptyInput(this.num_ident, this.nomb_cli, this.apell_cli, this.email_cli,
      this.direc_cli, this.telef_cli, this.selectedTipDni)) {

      if (this.validateNumIden(this.num_ident)) {
        const url = 'http://localhost:8080/customer';
        const id_tip_dni = this.getIdTipDni(this.selectedTipDni);
        const customerData = JSON.stringify({
          id_tip_dni: id_tip_dni,
          num_ident: this.num_ident,
          nomb_cli: this.nomb_cli,
          apell_cli: this.apell_cli,
          email_cli: this.email_cli,
          direc_cli: this.direc_cli,
          telef_cli: this.telef_cli,
        });

        const headers = {
          'Content-Type': 'application/json'
        };

        this.http.post(url, customerData, { headers }).subscribe(
          (response) => {
            if (response != null) {
              this.alertInsertCorrectly();
              this.closeModalForm();
              this.loadClients();
              this.clearInputs();
            }
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.alertNumIdent();
        this.num_ident = "";
      }
    }
  }

  updateProduct(id_prod: string) {
    if (this.isEmptyInput(this.num_ident, this.nomb_cli, this.apell_cli, this.email_cli,
                            this.direc_cli, this.telef_cli, this.selectedTipDni)) {

        const url = 'http://localhost:8080/customer/' + id_prod;

        const dataClient = JSON.stringify({
          id_tip_dni: this.selectedTipDni,
          num_ident: this.num_ident,
          nomb_cli: this.nomb_cli,
          apell_cli: this.apell_cli,
          email_cli: this.email_cli,
          direc_cli: this.direc_cli,
          telef_cli: this.telef_cli,
        });
  
        const headers = {
          'Content-Type': 'application/json',
        };

        this.http.put(url, dataClient, { headers }).subscribe(
          (response: any) => {
            this.alertInsertCorrectly();
            this.closeModalForm();
            this.loadClients();
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  validateNumIden(num_ident: string) {
    for (const item of this.items) {
      if (item.num_ident === num_ident) {
        return false;
      }
    }
    return true;
  }

  onSearchChange(event: any) {
    const searchTerm = event.target.value;
    if (searchTerm.trim() !== '') {
      this.items = this.items.filter(item =>
        item.num_ident.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.items = this.listWithOutFilter;
    }
  }

  handleBtnFormClient() {
    if (this.nameBtnModalForm === 'Registrar') {
      this.insertClient();
    } else  {
      this.updateProduct(this.id_cliente);
    }
  }

  getNomTipDni(id: string) {
    if (id == "1") {
      return "Cédula";
    } else if (id == "2") {
      return "RUC";
    } else {
      return "Pasaporte";
    }
  }

  setTitleFormCli() {
    this.titleModalForm = "Modificar Cliente";
    this.nameBtnModalForm = "Modificar";
    this.isDisabledInpTipDni = true;
    this.isDisabledInpNumDni = true;
    this.openModalForm();
  }

  loadDataClient(item: any) {
    this.selectedTipDni = this.getNomTipDni(item.id_tip_dni);
    this.id_cliente = item.id_cliente;
    this.num_ident = item.num_ident;
    this.nomb_cli = item.nomb_cli;
    this.apell_cli = item.apell_cli;
    this.email_cli = item.email_cli;
    this.direc_cli = item.direc_cli;
    this.telef_cli = item.telef_cli;
  }

  deleteItem(item: any) {

  }

  editItem(item: any) {
    this.setTitleFormCli();
    this.loadDataClient(item);
  }

  goBack() {
    this.closeModalForm();
  }

  clearSelection() {
    this.selectedTipDni = null;
  }

}
