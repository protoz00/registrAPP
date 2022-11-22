import { Component, OnInit } from '@angular/core';
import { CursoI } from 'src/app/Models/curso';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { SeccionI } from 'src/app/Models/seccion';
import { DataService } from 'src/app/servicios/data.service';
import { MetodosService } from 'src/app/servicios/metodos.service';




@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
  providers: []
})
export class MenuAlumnoPage implements OnInit {

    image:string;
  
  constructor(private metodo : MetodosService,
              private data : DataService) { 
 }
  
  datos : any ;
  ngOnInit() {
    this.listar();
    this.data.$getObjectSource.subscribe(data => this.datos = data ) 
  }
  
  lista_curso: CursoI[];
  lista_seccion: SeccionI[];
  lista_alumno : AlumnoI[];

  async listar(){
    this.metodo.listarCurso().subscribe(resp => {
      this.lista_curso = resp;
    })
    this.metodo.listarSeccion().subscribe(resp => {
      this.lista_seccion = resp;
    })
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
    })
  }


  
  


}