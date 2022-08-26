import { Component } from '@angular/core';
//control de navegacion
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//nav controller se utlizar para navegar a otra pag
  constructor(private navCtrl : NavController) {}

  agregar(){
    console.log('Pincho para agregar');
    //aca la indicamos que navege hacia navigate forward
    this.navCtrl.navigateForward('pagina1');
  }
}
