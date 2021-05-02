import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Encuesta} from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  contacts! :Observable<Encuesta>;
  private encuestaCollection!: AngularFirestoreCollection<Encuesta>;

  constructor( private readonly afs: AngularFirestore) {
    this.encuestaCollection= afs.collection<Encuesta>('encuesta');
   }


   async onSaveContact(mensaje: Encuesta): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id1 = this.afs.createId();
        const data = { id1, ...mensaje };
        const result = this.encuestaCollection.doc(id1).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  public traerTodos(): AngularFirestoreCollection<Encuesta> {
    return this.encuestaCollection;
}
}
