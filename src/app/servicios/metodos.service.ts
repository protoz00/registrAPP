import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable,} from 'rxjs';
import { AlumnoI } from '../Models/model-alumno';
import { map } from 'rxjs/operators';
import { ProfesorI } from '../Models/profesor';
import { CursoI } from '../Models/curso';
import { ClaseI } from '../Models/clase';
import { SeccionI } from '../Models/seccion';
import { usuarioI } from '../Models/usuario-alumno';



@Injectable({
  providedIn: 'root'
})



export class MetodosService {

  private AlumnoCollection  : AngularFirestoreCollection<AlumnoI>;
  private alumnos : Observable<AlumnoI[]>;  
  private ProfCollection : AngularFirestoreCollection<ProfesorI>;
  private prof : Observable<ProfesorI[]>;
  private CursoCollection:AngularFirestoreCollection<CursoI>;
  private curso : Observable<CursoI[]>;
  private ClaseCollection: AngularFirestoreCollection<ClaseI>;
  private clase :Observable<ClaseI[]>;
  private SeccionCollection : AngularFirestoreCollection<SeccionI>;
  private seccion : Observable<SeccionI[]>;
  private usuarioCollection : AngularFirestoreCollection<usuarioI>;
  private usuario : Observable<usuarioI[]>;


  constructor( firestore: AngularFirestore,
              ) {
    this.AlumnoCollection = firestore.collection<AlumnoI>('Alumno');
    this.alumnos = this.AlumnoCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
    this.ProfCollection = firestore.collection<ProfesorI>('Profesor');
    this.prof = this.ProfCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
    this.CursoCollection= firestore.collection<CursoI>('Curso');
    this.curso = this.CursoCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
    this.ClaseCollection = firestore.collection<ClaseI>('Clase');
    this.clase = this.ClaseCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
    this.SeccionCollection = firestore.collection<SeccionI>('Seccion');
    this.seccion = this.SeccionCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
    this.usuarioCollection = firestore.collection<usuarioI>('usuario');
    this.usuario = this.usuarioCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));


   }
   

   //CRUD alumno


    grabarAlumno(alu:AlumnoI){
      return this.AlumnoCollection.add(alu);
    }

    listarAlumnos(){
      return this.alumnos;
    }

    eliminarAlumno(id:string){
      return this.AlumnoCollection.doc(id).delete()
    }

    actualizarAlumno(id:string,nuevoAlumno : AlumnoI){
      return this.AlumnoCollection.doc(id).update(nuevoAlumno);
    }

    buscarAlumno(id:string){
      return this.AlumnoCollection.doc<AlumnoI>(id).valueChanges();
    }



    //CRUD profesor
    grabarProfesor(prof:ProfesorI){
      return this.ProfCollection.add(prof);
    }

    listarProfesor(){
      return this.prof;
    }

    eliminarProfesor(id:string){
      return this.ProfCollection.doc(id).delete()
    }

    actualizarProfesor(id:string,nuevoprof : ProfesorI){
      return this.ProfCollection.doc(id).update(nuevoprof);
    }

    buscarProfesor(id:string){
      return this.ProfCollection.doc<ProfesorI>(id).valueChanges();
    }

    //CRUD  Curso
    grabarCurso(cur:CursoI){
      return this.CursoCollection.add(cur);
    }

    listarCurso(){
      return this.curso;
    }

    eliminarCurso(id:string){
      return this.CursoCollection.doc(id).delete()
    }

    actualizarCurso(id:string,nuevocur : CursoI){
      return this.CursoCollection.doc(id).update(nuevocur);
    }

    buscarCurso(id:string){
      return this.CursoCollection.doc<CursoI>(id).valueChanges();
    }

    //CRUD seccion

    grabarSeccion(sec:SeccionI){
      return this.SeccionCollection.add(sec);
    }

    listarSeccion(){
      return this.seccion;
    }

    eliminarSeccion(id:string){
      return this.SeccionCollection.doc(id).delete();
    }

    actualizarSeccion(id:string,nuevosec:SeccionI){
      return this.SeccionCollection.doc(id).update(nuevosec);
    }

    buscarSeccion(id:string){
      return this.SeccionCollection.doc<SeccionI>(id).valueChanges();
    }
  
    
    //CRUD clase

    grabarClase(cla:ClaseI){
      return this.ClaseCollection.add(cla);
    }

    listarClase(){
      return this.clase;
    }

    eliminarClase(id:string){
      return this.ClaseCollection.doc(id).delete();
    }

    actualizarClase(id:string,nuevocla:ClaseI){
      return this.ClaseCollection.doc(id).update(nuevocla);
    }

    buscarClase(id:string){
      return this.ClaseCollection.doc<ClaseI>(id).valueChanges();
    }


    //crud usuario


    grabarUsuarioAlumno(usu:usuarioI){
      return this.usuarioCollection.add(usu);
    }

    listarUsuarioAlumno(){
      return this.usuario;
    }

    eliminarUsuarioAlumno(id:string){
      return this.usuarioCollection.doc(id).delete()
    }

    actualizarUsuarioAlumno(id:string,nuevoUsuario : usuarioI){
      return this.usuarioCollection.doc(id).update(nuevoUsuario);
    }

    buscarUsuarioAlumno(id:string){
      return this.usuarioCollection.doc<usuarioI>(id).valueChanges();
    }




    
}
