import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }
  //CREACION DE VARIABLES
  usuario:String;
  contrasena:String;

//metodo de inicio para cargar la pagina
  ngOnInit() {

  }
  //METODO GRABAR
  grabar(){
    console.log(this.usuario+" "+this.contrasena);
  }


}
