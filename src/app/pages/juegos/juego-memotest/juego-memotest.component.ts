import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';
import { Tarjeta } from 'src/app/clases/tarjeta';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-juego-memotest',
  templateUrl: './juego-memotest.component.html',
  styleUrls: ['./juego-memotest.component.css']
})
export class JuegoMemotestComponent implements OnInit {

  public juegoSeleccionado : string= "Memotest";
  jugador! : Jugadores;
 
//cardImages :Tarjeta[] = [];
cardImages =[  
 "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
 "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
 "/3FVe3OAdgz060JaxIAaUl5lo6cx.jpg",
 "/mb3fcmQzXd8aUf7r6izZfMHSJmz.jpg",
 "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg"]
  

  cards: Tarjeta[] = [];

  flippedCards: Tarjeta[] = [];

  matchedCount = 0;
  lista! : any[];

 

  constructor(private pelSvc : PeliculasService,private jugSvc : JuegosService) { 
    this.jugador= new Jugadores();
  this.jugador.juego= "Memotest";
  this.jugador.email = JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);

  }

  ngOnInit(): void {
    this.cargarfotos();
  //  this.setupCards();
  }

  guardarJugada(){     
  
    const fecha =  new Date();
    this.jugador.fecha= formatDate(fecha,'dd-MM-yyyy hh:mm:ss a','en-US');
   if(this.jugador.estado){     
       console.log(this.jugador);
      this.jugSvc.guardarJugada(this.jugador);

    }   
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }


  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: Tarjeta = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];
  
    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;
          
        if (this.matchedCount === this.cardImages.length) {
          this.restart();
          this.jugador.estado="ganador"
          this.guardarJugada();
          Swal.fire({
            icon: 'success',
            title: 'GANASTE!!!',
            text: this.jugador.email+',  te envitamos a realizar una encuesta si lo deseas!!',
            footer: '<a href="/juegos/encuesta">Completar la Encuesta</a>'
          })
       
        }
      }

    }, 1000);

   

  }

  restart(): void {
    this.matchedCount = 0;
    //this.setupCards();
    this.cargarfotos();
  }

  public cargarfotos(){
    this.pelSvc.getTodosLasPelis().subscribe((res:any) => {
      let auxList = new Array();
     // let aux = new Array();
      this.cards = [];
     auxList = res['results'];
     for (let index = 0; index < 5; index++) {
      let currentChat = auxList[index];
      const cardData: Tarjeta = {
        imageId: String( currentChat['backdrop_path']) ,
        state: 'default'
      };
     
      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    
    }
  
   console.log(this.cards);
   this.cards = this.shuffleArray(this.cards)
    })
  
  }
}
