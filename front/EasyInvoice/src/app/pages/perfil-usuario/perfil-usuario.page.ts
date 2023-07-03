import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  cerrarSesion() {
    
  }



  editNames() { }

  editUsername() { }

  editPhone() { }

  editEmail() { }

}
