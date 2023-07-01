import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items = [
    { name: 'Perfil', image: 'assets/icon/icon-perfil.svg'},
    { name: 'Gestión \nProductos', image: 'assets/icon/icon-gtnproducts.svg.svg' },
    { name: 'Gestión \nClientes', image: 'assets/icon/icon-gtnclient.svg'},
    { name: 'Facturar', image: 'assets/icon/icon-facturar.svg' },
    { name: 'Gestión \nEstablecimiento', image: 'assets/icon/icon-gtnestablec.svg'},
    { name: 'Cerrar Sesión', image: 'assets/icon/icon-logout.svg'}
  ];

  namesUser!: string;
  rolUser!: string;

  constructor() {}

  ngOnInit() { }

}
