import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {
  
 
  constructor(  private router:Router) {
    
   }

  ngOnInit(): void {
  }


Volver(){
  this.router.navigate(['home']);}

}
