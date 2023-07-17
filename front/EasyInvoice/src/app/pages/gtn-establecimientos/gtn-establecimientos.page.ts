import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, AlertController, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-gtn-establecimientos',
  templateUrl: './gtn-establecimientos.page.html',
  styleUrls: ['./gtn-establecimientos.page.scss'],
})
export class GtnEstablecimientosPage implements OnInit {

  showBackdrop: boolean = false;

  selectedOptionEstab: any;
  optionsTipDni: any[] = ["Cédula", "RUC", "Pasaporte"];
  optionsTipUser: any[] = ["Administrador", "Estándar"];
  optionsEstab!: any[];

  selectedItem!: any;

  items: any[] = [];
  private listWithOutFilter: any[] = [];


  @ViewChild('modalForm') modalForm!: IonModal;
  @ViewChild('modalDtVend') modalDtVend!: IonModal;
  @ViewChild('modalGtnEstab') modalGtnEstab!: IonModal;

  btnNameGtnEstab: string = "Registrar";
  isDisabledBtnElim: boolean = true;

  selectedOptEstabGtn: any;
  nombre!: string;
  telefono!: string;
  direccion!: string;
  email!: string;

  isDisabledInpTienda: boolean = true;
  selectedOptTiendaGtn: any;
  optionsTienda!: any[];

  titleModalForm!: string;
  nameBtnModalForm!: string;
  isDisabledInpNumIdent!: boolean;
  isDisabledInpTipDni!: boolean;
  selectedTipDni: any;
  selectedEstab: any;
  selectedTipUser: any;
  
  id_usuario!: string;
  id_tip_dni!: string;
  id_establ_per!: string;
  num_ident!: string;
  nomb_usuario!: string;
  apell_usuario!: string;
  email_usuario!: string;
  telef_usuario!: string;
  direc_usuario!: string;
  estado_usuario!: string;
  tip_usuario!: string;
  contrasenia!: string;

  constructor(private alertController: AlertController, private http: HttpClient,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  clearSelectionEstab() {
    this.selectedOptionEstab = null;
  }

  clearSelectionTipDni() {
    this.selectedTipDni = null;
  }

  clearSelectionTipUser() {
    this.selectedTipDni = null;
  }

  clearSelectionEstabGtn() {
    this.selectedOptEstabGtn = null;
    this.btnNameGtnEstab = "Registrar"
    this.isDisabledBtnElim = true;
    this.clearInputsGtnEstab();
  }

  clearSelectionTiendaGtn() {
    this.selectedOptTiendaGtn = null;
  }

  openModalForm() {
    this.modalForm.present();
  }

  closeModalForm() {
    //this.clearInputs()
    this.modalForm.dismiss()
  }

  closeModalGtnEstab() {
    this.modalGtnEstab.dismiss();
    this.clearSelectionEstabGtn();
  }

  openModalGtnEstab() {
    this.modalGtnEstab.present();
  }

  openModalDtVend(item: any) {
    //this.getPromocPro(item);
    //this.getCategPro(item);
    this.selectedItem = item;
    //this.modalDtProd.present();
  }

  clearInputsGtnEstab() {
    this.nombre = "";
    this.telefono = "";
    this.direccion = "";
    this.email = "";
  }

  selectEstabChange() {
    if (this.selectedOptEstabGtn) {
      //this.getPromId(this.selectedOptPromGtn);
    }
  }

  goBack() {
    this.closeModalForm();
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

  addVendedores() {
    this.titleModalForm = "Registro de Usuario";
    this.nameBtnModalForm = "Registrar";
    this.isDisabledInpNumIdent = false;
    this.openModalForm();
  }

  handleBtnFormVend() {
    if (this.nameBtnModalForm === 'Registrar') {
      //this.insertProm();
    } else {
      //this.modificarProm(this.selectedOptPromGtn);
    }
  }

  handleBtnGtnProm() {
    if (this.btnNameGtnEstab === 'Registrar') {
      //this.insertProm();
    } else {
      //this.modificarProm(this.selectedOptPromGtn);
    }
  }

  actionDeleteProm() {
    //this.presentAlert(() => {
    //  this.deleteProm(this.selectedOptPromGtn);
    //}, "la promoción")
  }

  editItem(item: any) {
    //this.loadDataProd(item);
    //this.setTitleFormProd();
  }

  deleteItem(item: any) {
    //this.presentAlert(() => {
    //  this.deleteProduct(item);
    //}, "el producto")
  }

}
