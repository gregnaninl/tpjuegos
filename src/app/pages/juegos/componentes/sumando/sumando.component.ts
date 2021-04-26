import { Component, OnInit } from '@angular/core';
import { JuegoSumando } from 'src/app/clases/juego-sumando';
import Swal from 'sweetalert2';
import { Jugadores } from 'src/app/clases/jugadores';
import { NgxSpinnerService } from "ngx-spinner";
import { formatDate } from '@angular/common';
import { JuegosService } from 'src/app/services/juegos.service';


@Component({
  selector: 'app-sumando',
  templateUrl: './sumando.component.html',
  styleUrls: ['./sumando.component.css']
})
export class SumandoComponent implements OnInit {

  nuevoJuego: JuegoSumando ;
  ocultarVerificar : boolean= true;
  ocultarRespuesta : boolean = true;
  ocultarNuevoJuego : boolean = false;
  ocultarSpinner : boolean= true;
  Mensajes!:string;
  jugador1 : string = JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);
  jugador! : Jugadores;

  numero1!: number ;
  numero2!: number ;
  numero3!: number ;
  numero4!: number ;
  numero5!: number ;
  numero6!: number ;
  numero7!: number ;
  numero8!: number ;
  numero9!: number ;
  contador!:number;

  constructor(private spinner: NgxSpinnerService, private jugSvc :JuegosService) {
  this.nuevoJuego = new JuegoSumando("Sumando 15",false,this.jugador1);
  this.jugador= new Jugadores();
  this.jugador.juego= "Sumando";

  }

  ngOnInit(): void {
  }

  sumar( numero1: number,numero2 : number,numero3 : number){
    return numero1+numero2+numero3;
  }

  consultar(){

   
    this.ocultarVerificar=true;
    this.nuevoJuego.fila1 = this.sumar(this.numero1 ,this.numero2, this.numero3) ;
    this.nuevoJuego.fila2 = this.sumar(this.numero4 ,this.numero5 ,this.numero6);
    this.nuevoJuego.fila3 = this.sumar(this.numero7 , this.numero8 , this.numero9);
    this.nuevoJuego.fila4 = this.sumar(this.numero1 , this.numero5 ,this.numero9);
    this.nuevoJuego.fila5 = this.sumar(this.numero7 ,this.numero5 , this.numero3 ) ;
   
    this.spinner.show();
    setTimeout(() => {
        if(this.nuevoJuego.verificar() )
        {
          
          this.jugador.estado="ganador"
          Swal.fire({       
            icon: 'success',
            title: this.jugador1+',  Muy Bien Ganaste!!!',
            showConfirmButton: false,
            timer: 1500
           });   
        }
        else
          {
          
            this.jugador.estado="perdedor"
            Swal.fire({         
              icon: 'error',
              title: 'MMM  Segui Participando o agarra la Calculadora!!!',
              showConfirmButton: false,
              timer: 1500
            });     
          }
    
        console.log(this.nuevoJuego.fila1+","+this.nuevoJuego.fila2+","+ this.nuevoJuego.fila3+","+ this.nuevoJuego.fila4+","+ this.nuevoJuego.fila5);
      this.ocultarVerificar = true;
        
        this.nuevoJuego = new JuegoSumando("Sumando 15",false,this.jugador1);
        this.ocultarSpinner = true;   
        this.ocultarNuevoJuego = false;
        this.spinner.hide();
        this.guardarJugada();

      }, 4000);
  
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

  NuevoJuego(){
    this.ocultarNuevoJuego = true;
    this.ocultarVerificar = false;
    this.ocultarRespuesta= true;

  }

  MostrarResultado(){
    this.ocultarRespuesta= false;
    

  }

}
