import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { ClaseI } from 'src/app/Models/clase';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { Router } from '@angular/router';



@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.page.html',
  styleUrls: ['./seccion.page.scss'],
})
export class SeccionPage implements OnInit {

  constructor(private data : DataService,
              private metodo : MetodosService,
              private router : Router) { }
  datos_seccion : any;
  ngOnInit( ) {
    this.data.$getObjectSource.subscribe(data => this.datos_seccion = data )
    this.listar();
  }
  
  clase : ClaseI= { 
    fecha : '',
    hora:'',
    id_alumno:'',
    id_seccion:'',
    estado:''

  }  
  lista_alumnos : AlumnoI[];
  async listar() {
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumnos = resp;
    })
  }


  async iniciar(){
    var date = new Date()
    this.clase.fecha = date.toLocaleDateString();
    console.log(this.clase.fecha)
    this.clase.hora = date.toTimeString();
    console.log(this.clase.hora)
    this.clase.id_seccion = this.datos_seccion.id;
    for (let alumno of this.lista_alumnos){
      if(alumno.id == this.datos_seccion.id_alumno)
        this.metodo.grabarClase(this.clase);
        
    }
    this.data.sendObjectSource(this.clase);
    this.router.navigate(['qr/']);
  }

}
