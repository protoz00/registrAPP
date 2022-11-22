import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { usuarioI } from '../Models/usuario-alumno';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private coleccion : AngularFirestoreCollection<usuarioI>;
  AUTH_SERVER_ADDRESS : string = 'http://localhost:8100';
  authState = new BehaviorSubject(false); 

  constructor(
      private authFirebase: AngularFireAuth,
              firebase: AngularFirestore) { }

              
  
  



  login(correo : string, pass : string){
    return this.authFirebase.signInWithEmailAndPassword(correo, pass)
  }

  registrar(user :usuarioI){
    return this.authFirebase.createUserWithEmailAndPassword(user.correo , user.pass);
  }

  stateUser(){
    return this.authFirebase.authState;
  }
  
              
}
