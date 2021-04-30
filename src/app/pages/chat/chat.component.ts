import { Component, OnInit } from '@angular/core';
import { faPlayCircle, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Chat} from 'src/app/clases/chat';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from 'src/app/services/chat.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  play =faPlayCircle;

  public listadoChats!: Object;
  public  data : Chat[];
  public jugador1 : string = JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);
  public mensajes!: string;
  public mensaje! : Chat;



  
  constructor( private db : AngularFirestore, private jugSvc :ChatService) {
    this.data= new Array<Chat>();
    this.mensaje = new Chat();
    this.mensaje.usuario=this.jugador1;
  
    console.log(new Date().toString());
    console.log(new Date().toLocaleString());
   }

  ngOnInit(): void {
    this.cargarMensajes();
  }

 

   public guardarChat(){     
    this.mensaje.usuario= this.jugador1;
      this.mensaje.fecha= Date.now().toString();  
       if(this.mensaje.mensaje){     
      console.info(this.mensaje);
      this.jugSvc.onSaveContact(this.mensaje);
      this.mensaje.mensaje='';
    }
   
  }
 
 
  public cargarMensajes(){

    this.jugSvc.traerTodos().valueChanges().subscribe((res:any) => {
      let auxList = new Array();
      for (let index = 0; index < res.length; index++) {
          let currentChat = res[index];
          let chat = new Chat();
          chat.fecha = currentChat["fecha"];
          chat.usuario = currentChat["usuario"];
          chat.mensaje = currentChat["mensaje"];
          auxList.push(chat);

      }
      console.log(auxList);  
     this.data= auxList.sort((a, b) => a.fecha.localeCompare(b.fecha));
     console.log(this.data);
    })
  }

  

  public getDate(fecha: any) {
    console.log(new Date(+fecha).toDateString()) ;  
    return new Date(+fecha).toLocaleTimeString();
     
}

getTimeStamp() {
  const now = new Date();
  const date = now.getUTCFullYear() + '-' +
               (now.getUTCMonth() + 1) + '-' +
               now.getUTCDate();
              
  const time = now.getUTCHours()-3 + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (date + ' ' + time);
}
  



}
