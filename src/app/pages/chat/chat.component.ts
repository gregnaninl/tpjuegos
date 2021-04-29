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
    //console.log(this.jugador1);
   }

  ngOnInit(): void {
    this.cargarMensajes();
  }

 

   public guardarChat(){     
    this.mensaje.usuario= this.jugador1;
    const fecha =  new Date();
    this.mensaje.fecha= this.getTimeStamp();//formatDate(fecha,'dd-MM-yyyy hh:mm:ss a','en-US');
  
       if(this.mensaje.mensaje){     
      console.info(this.mensaje);
      this.jugSvc.onSaveContact(this.mensaje);
      this.mensaje.mensaje='';
    }
   
  }
 

  public cargarMensajes(){

    this.db.collection('chat').valueChanges().subscribe(
      (res)=>{
        this.listadoChats = res;
        this.cargarTabla(this.listadoChats);         
          },
      (error)=> console.log(error)     
      );

  }

  cargarTabla(listado : Object){
    const datos = Object.values(listado);
    this.data= datos;
 /*  this.data.sort((a, b) => {
    return <any>new Date(Date.parse(a.fecha)) - <any>new Date(Date.parse(b.fecha));
      });*/
      console.log(this.data);
        
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
  



}
