import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homejuegos',
  templateUrl: './homejuegos.component.html',
  styleUrls: ['./homejuegos.component.css']
})
export class HomejuegosComponent implements OnInit {


  //jugador : JSON = JSON.parse(localStorage.getItem('usuarioEnLinea')!);

  constructor() { }

  ngOnInit(): void {

   // console.log(this.jugador);
  }

}
