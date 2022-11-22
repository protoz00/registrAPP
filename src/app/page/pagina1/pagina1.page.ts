import { Component, OnInit } from '@angular/core';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { ProfesorI } from 'src/app/Models/profesor';
import { AuthService } from 'src/app/servicios/auth.service';
import { DataService } from 'src/app/servicios/data.service';
import { MetodosService } from 'src/app/servicios/metodos.service';




@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor(private auth : AuthService,
              private metodo : MetodosService,
              private dataSrv : DataService) { 

                const dato_usuario = {
                  correo: this.datos.correo,
                  pass : this.datos.pass
                }
              }
  //CREACION DE VARIABLES


  datos = {

    correo: null,
    pass : null
  }
//metodo de inicio para cargar la pagina
  ngOnInit() {
    this.listar();
 }

  lista_profesor : ProfesorI[];
  lista_alumno : AlumnoI[];
  //METODO GRABAR
  //grabar(){
  //  console.log(this.usuario+" "+this.contrasena);
  //}

  async listar(){

    this.metodo.listarProfesor().subscribe(resp =>{
      this.lista_profesor = resp;
      
    })
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
    })
  }

  async login(){
    const res = await this.auth.login(this.datos.correo, this.datos.pass).catch( error =>{
      console.log(error)
    })
    if(res){
      if(this.datos.correo == this.metodo.buscarAlumno(this.datos.correo)){
        //this.dataSrv.data = this.datos;
        console.log('es alumno')
      }

    }else{  
      console.log ('es profesor')
      //this.dataSrv.data = this.datos;
    }
    
  }


}
