import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { first, switchMap } from 'rxjs/operators';
import { AngularFirestore,  AngularFirestoreCollection} from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { Logs } from '../clases/logs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public user! : Usuario;
  private logCollection!: AngularFirestoreCollection<Logs>;
  public isLogguedIn : boolean = false;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.logCollection= afs.collection<Logs>('logUser');
   }




  async loginGoogle(){
    try{
     return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
     this.isLogguedIn = true;     
    }
    catch(e){
      console.log(e);
      return(e);
    }
  }

  async onSaveLog(logUser: Logs): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id1 = this.afs.createId();
        const data = { id1, ...logUser };
        const result = this.logCollection.doc(id1).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }


  async login(email: string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password);
        this.isLogguedIn = true;
        return result;
    }
    catch(e){
    console.log(e);
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
      this.isLogguedIn= false;
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

    traerLocalStorage() : boolean{
      if(localStorage.getItem("usuarioEnLinea")){
        return true;
      }else{
        return false
      }

    }




}


