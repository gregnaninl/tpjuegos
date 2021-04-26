import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-piedra',
  templateUrl: './piedra.component.html',
  styleUrls: ['./piedra.component.css']
})
export class PiedraComponent implements OnInit {

  juegoSeleccionado: string = "Piedra-Papel-Tijera";

  constructor() { 
   
  }

  ngOnInit(): void {
  }
 

}
