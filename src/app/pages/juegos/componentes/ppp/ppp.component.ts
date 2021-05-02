import { Component, OnInit } from '@angular/core';
import {  Ppt  } from  '../../../../clases/ppt';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { JuegosService } from '../../../../services/juegos.service';
import { Jugadores } from 'src/app/clases/jugadores';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-ppp',
  templateUrl: './ppp.component.html',
  styleUrls: ['./ppp.component.css']
})
export class PppComponent implements OnInit {

 nuevoJuego! : Ppt;
  ocultarVerificar! : boolean;  
  mensaje!:string; 
  jugador1 : string = JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);
  jugador! : Jugadores;



  constructor(private spinner: NgxSpinnerService, private jugSvc :JuegosService) {
   this.nuevoJuego = new Ppt("Piedra, Papel o Tijera",false,this.jugador1); 
   this.jugador= new Jugadores();
   this.jugador.juego= "Piedra-Papel-Tijera";
     
   }
  

  ngOnInit(): void {
  
  }

  generar()
   {
    this.ocultarVerificar = false;
    this.nuevoJuego.empezarJuego();
    console.log(this.nuevoJuego.opcionMaquina);
   }

   verificar(opcionUsuario : string)
   {
     this.nuevoJuego.opcionUsuario = opcionUsuario;
     
   
     console.log(this.nuevoJuego.opcionUsuario);
     switch(opcionUsuario)
     {
       case "piedra":
       var boton = ((<HTMLInputElement>document.getElementById("btn1")));
       console.log(boton);
       boton.className = "btnApretado";
       console.log(boton.className);
       break;
       case "papel":
       var boton = ((<HTMLInputElement>document.getElementById("btn2")));
       console.log(boton);
       boton.className = "btnApretado";
       console.log(boton.className);
       break;
       case "tijera":
       var boton = ((<HTMLInputElement>document.getElementById("btn3")));
       console.log(boton);
       boton.className = "btnApretado";
       console.log(boton.className);
       break;
     }
     var modelo=this;
     this.spinner.show();
     setTimeout(() => {
      if(modelo.nuevoJuego.verificar())
      {
        this.jugador.estado="ganador"
        console.log(modelo.nuevoJuego); 
               
        Swal.fire({
          icon: 'success',
          title: 'GANASTE!!!',
          text: this.jugador1+',  te envitamos a realizar una encuesta si lo deseas!!',
          footer: '<a href="/juegos/encuesta">Completar la Encuesta</a>'
        })  
         
           
      }
      else
        {
          this.jugador.estado="perdedor"
          console.log(modelo.nuevoJuego); 
         
          Swal.fire({
            icon: 'error',
            title: 'PERDISTE!!!',
            text: this.jugador1+',  te envitamos a realizar una encuesta si lo deseas!!',
            footer: '<a href="/juegos/encuesta">Completar la Encuesta</a>'
          })         

        }      
       
        modelo.nuevoJuego = new Ppt("Piedra, Papel o Tijera",false,modelo.jugador1);       
      this.spinner.hide();
      this.guardarJugada();
    }, 4000);
 
   }

 
   
   verImagen()
   {
     let btn = ((<HTMLInputElement>document.getElementById("btn1")).value);
     let btn2 = ((<HTMLInputElement>document.getElementById("btn2")).value);
     console.log(btn);
     console.log(btn2);
   }

   guardarJugada(){     
    this.jugador.email= this.jugador1;
    const fecha =  new Date();
    this.jugador.fecha= formatDate(fecha,'dd-MM-yyyy hh:mm:ss a','en-US');
   if(this.jugador.estado){     
       console.log(this.jugador);
      this.jugSvc.guardarJugada(this.jugador);

    }
   
  }




}
