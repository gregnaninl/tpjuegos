import { Component, OnInit } from '@angular/core';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  public user : any;
  public user$ : Observable<any> = this.authSvc.afAuth.user;

  fagithub = faBlog ;
  faPuzzlePiece =faPuzzlePiece;

  constructor(private authSvc : AuthService,private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
    }
  }

}
