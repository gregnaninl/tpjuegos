import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {

  public juegoSeleccionado : string= "Todos";

  constructor() { }

  ngOnInit(): void {
  }

}
