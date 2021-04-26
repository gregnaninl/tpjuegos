import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection} from '@angular/fire/firestore';
import { Jugadores } from '../clases/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private jugadorCollection!: AngularFirestoreCollection<Jugadores>;


  constructor(private afs: AngularFirestore) { 
    this.jugadorCollection= afs.collection<Jugadores>('jugadores');
    

  }

  async guardarJugada(jugador: Jugadores): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...jugador};
        const result = this.jugadorCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

}
