import { Component, OnInit } from '@angular/core';
import { CursoI } from 'src/app/Models/curso';
import { ProfesorI } from 'src/app/Models/profesor';
import { SeccionI } from 'src/app/Models/seccion';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { AlumnoI } from 'src/app/Models/model-alumno';


@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.page.html',
  styleUrls: ['./menu-profesor.page.scss'],
})
export class MenuProfesorPage implements OnInit { 

  constructor( private metodo : MetodosService,
                private data : DataService,
                private router: Router
                ) { 

                 
   }

   datos_seccion = {

    alias_curso : '',
    nombre_curso: '',
    nombre_seccion : '',
    id : '',
    id_alumno : ''
   }  
   datos : any;
  ngOnInit() {
    this.listar();
    this.data.$getObjectSource.subscribe(data => this.datos = data )
  }
  
  lista_curso: CursoI[];
  lista_seccion: SeccionI[];
  lista_profesor : ProfesorI[];
  seccion_data : any;
  lista_alumno : AlumnoI[];


  async listar(){
    this.metodo.listarCurso().subscribe(resp => {
      this.lista_curso = resp;
    })
    this.metodo.listarSeccion().subscribe(resp => {
      this.lista_seccion = resp;
    })
    this.metodo.listarProfesor().subscribe(resp =>{
      this.lista_profesor = resp;
    })
    this.metodo.listarAlumnos().subscribe(resp =>{
      this.lista_alumno = resp;
    })
    
  
  }
la_seccion(nombre_curso:any,nombre_seccion:any,curso_alias:any,seccion_id:any,id_alumno:any){
  this.router.navigate(['/seccion'])
  this.datos_seccion.nombre_curso = nombre_curso
  this.datos_seccion.nombre_seccion = nombre_seccion
  this.datos_seccion.alias_curso = curso_alias
  this.datos_seccion.id = seccion_id
  this.datos_seccion.id_alumno = id_alumno
  console.log(this.datos_seccion)
  this.data.sendObjectSource(this.datos_seccion);
  
}


}
