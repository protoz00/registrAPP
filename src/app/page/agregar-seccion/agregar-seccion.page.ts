import { Component, OnInit } from '@angular/core';
import { CursoI } from 'src/app/Models/curso';
import { SeccionI } from 'src/app/Models/seccion';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { AlumnoI } from 'src/app/Models/model-alumno';
import { ProfesorI } from 'src/app/Models/profesor';

@Component({
  selector: 'app-agregar-seccion',
  templateUrl: './agregar-seccion.page.html',
  styleUrls: ['./agregar-seccion.page.scss'],
})
export class AgregarSeccionPage implements OnInit {

  constructor(private metodo:MetodosService,
              ) { }

  ngOnInit() {
    this.listar();
    
  }

  lista_curso: CursoI[];
  lista_prof : ProfesorI[];
  lista_alumno:AlumnoI[];

  async listar(){
    this.metodo.listarCurso().subscribe(resp => {
      this.lista_curso = resp;
    })
    this.metodo.listarProfesor().subscribe(resp => {
      this.lista_prof = resp;
    })
    this.metodo.listarAlumnos().subscribe(resp => {
      this.lista_alumno = resp;
    })

  }
  seccion : SeccionI={
    nombre:'',
    id_curso: '',
    id_alumno:'' ,
    id_profesor:''


  }
  async agregar(){
    this.metodo.grabarSeccion(this.seccion);
  }

}
