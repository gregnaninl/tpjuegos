import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
//import * as firebase from 'firebase';
//import { auth } from  'firebase/app';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user! : Usuario;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { }


  async login(email: string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password);
        return result;
    }
    catch(e){
    console.log(e);
//    Swal.fire('Algo Salio Mal!',e,'error');   
    return e; 
    }    
        
  }

  async register(email: string, password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email, password);
        return result;
    }
    catch(e){
      //Swal.fire('Algo Salio Mal!',e.message,'error');    
      return e; 
    }
    
    }

  async logout(){
    try{
      await this.afAuth.signOut();  
    }
    catch(e){
      //Swal.fire('Algo Salio Mal!',e,'error');    
    }
  
  }


  getCurretUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
   return (await this.afAuth.currentUser)?.sendEmailVerification();
  }





}
