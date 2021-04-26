import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from 'src/app/clases/juego-anagrama';
import Swal from 'sweetalert2';
import { Jugadores } from 'src/app/clases/jugadores';
import { JuegosService } from 'src/app/services/juegos.service';
import { NgxSpinnerService } from "ngx-spinner";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  anagrama! : JuegoAnagrama;
  ocultarVerificar : boolean = true;
  Mensajes!:string;
  contador!:number;
  arrayResultados : Array<any> = new Array<any>();
  jugador1 : string = JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);
  jugador! : Jugadores;
  ocultarPalabra : boolean = true;

  constructor(private spinner: NgxSpinnerService, private jugSvc :JuegosService) {
    this.anagrama = new JuegoAnagrama("Anagrama",false,this.jugador1);
     this.jugador= new Jugadores();
   this.jugador.juego= "Anagrama";

  }

  ngOnInit(): void {
  }
  public generar() : void
  {
   this.anagrama.generarPalabra();
   console.log(this.anagrama.palabraCorrecta);
   console.log(this.anagrama.palabraIngresada);
   console.log(this.anagrama.palabraDesorganizada);
   this.ocultarVerificar = false;
   this.ocultarPalabra= false;
  }

  public verificar() : void
  {
    if(this.anagrama.palabraIngresada != null)
      {
    this.anagrama.palabraIngresada = this.anagrama.palabraIngresada.toLocaleUpperCase();
    this.ocultarVerificar = true;
    console.log(this.anagrama.palabraDesorganizada);
    console.log(this.anagrama.palabraIngresada);
    console.log(this.anagrama.palabraCorrecta);
    this.spinner.show();
     setTimeout(() => {
    if(this.anagrama.verificar())
      {
        this.jugador.estado="ganador"
        Swal.fire({       
          icon: 'success',
          title: this.jugador1+',  Genio. Has acertado la palabra!',
          showConfirmButton: false,
          timer: 1500
         });    
      }
      else
        {
          
          this.jugador.estado="perdedor"
          Swal.fire({         
            icon: 'error',
            title: 'Segui Participando!!!',
            showConfirmButton: false,
            timer: 1500
          });     

        }
        this.anagrama = new JuegoAnagrama("Anagrama",false,this.jugador1);
        this.ocultarPalabra = true;
        this.spinner.hide();
        this.guardarJugada();

      }, 4000);
      }   
        
        
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
