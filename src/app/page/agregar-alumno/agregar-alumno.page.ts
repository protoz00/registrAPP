import { Component, OnInit } from '@angular/core';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { usuarioI } from 'src/app/Models/usuario-alumno';


@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.page.html',
  styleUrls: ['./agregar-alumno.page.scss'],
})
export class AgregarAlumnoPage implements OnInit {

  constructor(private metodo: MetodosService,
              private auth : AuthService) { }

  ngOnInit() {
  }
  
  datos = {

    correo: null,
    pass : null,
    tipoUser :'2'
  }


  alumno: AlumnoI={
    run:'',
    nombre:'',
    apellido:'',
    correo:'',
  }
  async agregar(user : usuarioI){
    this.metodo.grabarAlumno(this.alumno);
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
    this.alumno.nombre = '';
    this.alumno.run = '';
    this.alumno.apellido = '';
    this.alumno.correo = '';
  }
  


}
