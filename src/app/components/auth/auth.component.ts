import { Component, Input ,OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { NavController } from '@ionic/angular';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { ProfesorI } from 'src/app/Models/profesor';
import { Router } from '@angular/router';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {


  @Input() mensaje : string;
  
  constructor(private auth : AuthService,
              private metodo : MetodosService,
              private navCtrl : NavController,
              private router :Router,
              private data: DataService) {
    
   }


  usuario: string;
  pass: string;

  datos = {

    correo: '',
    pass : ''
  }
 

  ngOnInit() {
    this.listar()
  }
 
  lista_profesor : ProfesorI[];
  lista_alumno : AlumnoI[];

  async listar(){
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
      
    })

    this.metodo.listarProfesor().subscribe(resp =>{
      this.lista_profesor = resp;
    })
  }

  async login(){
    const res =this.auth.login(this.datos.correo, this.datos.pass).catch( error =>{
      console.log(error)
    })
    if(res){ 
      for (let alumno of this.lista_alumno) {
        if (this.datos.correo == alumno.correo){
          console.log('ingreso como alumno')
            this.data.sendObjectSource(this.datos)
            this.router.navigate(['/menu-alumno'])

        }}
          for (let profesor of this.lista_profesor){
            if (this.datos.correo == profesor.correo){
              console.log('ingreso como profesor')
                this.data.sendObjectSource(this.datos)
                this.router.navigate(['/menu-profesor'])
    
            } 
          }    
    }else{
  console.log(console.log(Error)
  );
    }
}


}