import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth : AuthService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;}

    return this.chekUser();
  }


  public chekUser(): boolean{
    if(this.auth.traerLocalStorage()){
      return true;
    }else{
      Swal.fire('Prohibido',
      'Lo siento, para ingresar a los juegos tienes que esar logueado!!',
      'error');   
    
      return false;
    }
  
    }
  
}
