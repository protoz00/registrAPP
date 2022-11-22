import { Component, OnInit } from '@angular/core';
import { CursoI } from 'src/app/Models/curso';
import { MetodosService } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.page.html',
  styleUrls: ['./agregar-curso.page.scss'],
})
export class AgregarCursoPage implements OnInit {

  constructor(private metodo : MetodosService) { }

  ngOnInit() {
  }

  curso: CursoI={
    nombre_curso:'',
    alias:'',
    carrera:''

  }
  async agregar(){
    this.metodo.grabarCurso(this.curso);
  }

  limpiar(){
    this.curso.nombre_curso = '';
    this.curso.carrera = '';

  }

}
