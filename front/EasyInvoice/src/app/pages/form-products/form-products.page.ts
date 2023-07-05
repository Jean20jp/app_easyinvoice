import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.page.html',
  styleUrls: ['./form-products.page.scss'],
})
export class FormProductsPage implements OnInit {

  title!: string;
  nameBtn!: string;

  codigo_barras!: string;
  nom_producto!: string;
  descrip_prod!: string;
  precio!: string;
  unidades_dispon!: string;


  optionsCateg!: any[];
  optionsIva!: any[];
  optionsProm!: any[];
  selectedOption: any;

  constructor(private navCtrl: NavController, private route: ActivatedRoute,
    private http: HttpClient) {
      this.recoverCategories();
      this.recoverCategIva();
      this.recoverCategProm();
     }

  ngOnInit() {
    this.initPage();
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

  initPage() {
    this.route.params.subscribe(params => {
      if (params['bandera']) {
        this.title = params['title'];
        this.nameBtn = params['nameBtn'];
      } else {
        this.title = params['title'];
        this.nameBtn = params['nameBtn'];
      }
    });
  }

  clearSelection() {
    this.selectedOption = null;
  }

  goBack() {
    this.navCtrl.navigateBack('gtn-products');
  }

}
