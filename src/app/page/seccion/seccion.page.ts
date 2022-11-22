import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { ClaseI } from 'src/app/Models/clase';
import { MetodosService } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.page.html',
  styleUrls: ['./seccion.page.scss'],
})
export class SeccionPage implements OnInit {

  constructor(private data : DataService,
              private metodo : MetodosService) { }
  datos_seccion : any;
  ngOnInit( ) {
    this.data.$getObjectSource.subscribe(data => this.datos_seccion = data )
  }
  
  clase : ClaseI= { 
    fecha : '',
    hora:'',
    id_alumno:'',
    id_seccion:'',
    estado:'Ausente'

  }  



  async iniciar(){
    var date = new Date()
    this.clase.fecha = date.getFullYear,date.getMonth,date.getDay
    this.clase.hora = date.getHours,date.getMinutes
    

  }

}
