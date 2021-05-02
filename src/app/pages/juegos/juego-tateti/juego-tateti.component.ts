import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import Swal from 'sweetalert2';
import { Jugadores } from 'src/app/clases/jugadores';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-juego-tateti',
  templateUrl: './juego-tateti.component.html',
  styleUrls: ['./juego-tateti.component.css']
})
export class JuegoTatetiComponent implements OnInit {

  squares!: string[];
  xIsNext!: boolean;
  winner?: string;
  limpiar : boolean = true;
  jugador! : Jugadores;


  constructor(private jugSvc :JuegosService) {
    this.jugador= new Jugadores();
  this.jugador.juego= "TaTeTi";
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.limpiar= true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      }
      this.limpiar= false;
    this.winner = this.calculateWinner();
    if(this.winner){

      this.guardarJugada();

      Swal.fire({
        icon: 'success',
        title: 'GANASTE!!!',
        text: this.winner+',  te envitamos a realizar una encuesta si lo deseas!!',
        footer: '<a href="/juegos/encuesta">Completar la Encuesta</a>'
      })  
      
       this.newGame() ;  
    }
  }



  
  calculateWinner():string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
       
        return this.squares[a];
        
      }
    }
    return "";
  }
  
  guardarJugada(){     

    if(this.winner==='X'){
     this.jugador.estado="ganador";
    }else{
      this.jugador.estado= "perdedor"
    }
    this.jugador.email= JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);
    const fecha =  new Date();
    this.jugador.fecha= formatDate(fecha,'dd-MM-yyyy hh:mm:ss a','en-US');
   if(this.jugador.estado){     
      console.log(this.jugador);
      this.jugSvc.guardarJugada(this.jugador);

    }   
  }

  


}
