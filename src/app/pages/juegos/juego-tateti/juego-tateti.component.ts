import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

  constructor() {}

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
      Swal.fire({       
        icon: 'success',
        title: 'Jugador : '+this.winner+' ,  Muy Bien Ganaste!!!',
        showConfirmButton: false,
        timer: 2000
       });
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
}
