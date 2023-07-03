import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ModalController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  private receivedData: any;
  names!: string;
  username!: string;
  phone!: string;
  email!: string;
  direccion!: string;

  constructor(private dataSharingService: DataSharingService,
    private http: HttpClient, private modalController: ModalController,
    private alertController: AlertController,
    private navCtrl: NavController) { 

    }

  ngOnInit() {
  }

  initDataUser() {
    this.receivedData = this.dataSharingService.getJsonData();
    this.names = this.receivedData.nombrePers;
    this.username = this.receivedData.usernamePers;
    this.phone = this.receivedData.telfPers;
    this.email = this.receivedData.correoPers;
  }
  cerrarSesion() {
    
  }



  editNames() { }

  editUsername() { }

  editPhone() { }

  editEmail() { }

}
