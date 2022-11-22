import { Component, OnInit } from '@angular/core';
import { ProfesorI } from 'src/app/Models/profesor';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { auth } from 'firebase-admin';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.page.html',
  styleUrls: ['./agregar-profesor.page.scss'],
})
export class AgregarProfesorPage implements OnInit {

  constructor(private metodo: MetodosService,
              private auth : AuthService) { }

  ngOnInit() {
  }
  datos = {

    correo: null,
    pass : null,
    tipoUser : '1'
  }
  profesor: ProfesorI={
    run:'',
    nombre:'',
    apellido:'',
    correo:''


  }
  async agregar(user : ProfesorI){
    this.metodo.grabarProfesor(this.profesor);
    this.metodo.grabarUsuarioAlumno(this.datos).then (async ()=>{
      const res = this.auth.registrar(this.datos).catch(error =>{
        console.log(error)
      })
      if(res){
        console.log(res)
      }
    })
  }

  limpiar(){
    this.profesor.nombre = '';
    this.profesor.run = '';
    this.profesor.apellido = '';
    this.profesor.correo = '';
  }



}