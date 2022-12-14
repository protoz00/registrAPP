import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { ClaseI } from 'src/app/Models/clase';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { MetodosService } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private metodo : MetodosService) {
    
   }
  ngOnInit() {
    this.listar();
   // this.contar();
    
  }
  
  ngOnDestroy(){
    this.conteo = 0
  }

  lista_alumno : AlumnoI[];
  lista_clase : ClaseI[];
  conteo = 0
  async listar(){
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
      
    })

    this.metodo.listarClase().subscribe(resp =>{
      this.lista_clase = resp;
    })
  }
   async contar(){

      for(let alumno of this.lista_alumno){
        for(let clase of this.lista_clase){
        if (clase.id_alumno == alumno.id){
          this.conteo = this.conteo + 1
      }}
    
      }
      console.log(this.conteo)
     
      this.lista_clase.forEach(clase => {
          
      });
  }
  
}
