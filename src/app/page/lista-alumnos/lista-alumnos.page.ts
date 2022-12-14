import { Component, OnInit } from '@angular/core';

import { AlumnoI } from 'src/app/Models/model-alumno';
import { SeccionI } from 'src/app/Models/seccion';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { DataService } from 'src/app/servicios/data.service';
import { ProfesorI } from 'src/app/Models/profesor';
import { ClaseI } from 'src/app/Models/clase';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage implements OnInit {

  constructor(private metodo : MetodosService,
              private data : DataService) { }
  datos_seccion:any
  ngOnInit() {
    this.listar();
    this.data.$getObjectSource.subscribe(data => this.datos_seccion = data )
  }
  lista_alumno : AlumnoI[];
  lista_seccion: SeccionI[];
  lista_profesor: ProfesorI[];
  async listar(){
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
    })
      this.metodo.listarSeccion().subscribe(resp => {
        this.lista_seccion = resp;
    })
    this.metodo.listarProfesor().subscribe(resp =>{
      this.lista_profesor = resp;
    })
    
  }
}
