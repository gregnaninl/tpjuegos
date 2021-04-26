import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-sumando',
  templateUrl: './juego-sumando.component.html',
  styleUrls: ['./juego-sumando.component.css']
})
export class JuegoSumandoComponent implements OnInit {

  public juegoSeleccionado : string= "Sumando";

  constructor() { }

  ngOnInit(): void {
  }

}
