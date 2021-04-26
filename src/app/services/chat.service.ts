import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chat} from '../clases/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  contacts! :Observable<Chat>;
  private contactsCollection!: AngularFirestoreCollection<Chat>;

  constructor( private readonly afs: AngularFirestore) {
    this.contactsCollection= afs.collection<Chat>('chat');
   }


   async onSaveContact(mensaje: Chat): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id1 = this.afs.createId();
        const data = { id1, ...mensaje };
        const result = this.contactsCollection.doc(id1).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

}
