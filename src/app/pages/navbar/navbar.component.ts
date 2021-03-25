import { Component, OnInit } from '@angular/core';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fagithub = faBlog ;
  faPuzzlePiece =faPuzzlePiece;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
