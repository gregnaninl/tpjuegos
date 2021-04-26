import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-juego-anagrama',
  templateUrl: './juego-anagrama.component.html',
  styleUrls: ['./juego-anagrama.component.css']
})
export class JuegoAnagramaComponent implements OnInit {
  
  public juegoSeleccionado : string= "Anagrama";

  constructor() {
    

  }

  ngOnInit(): void {
  }

 


}
