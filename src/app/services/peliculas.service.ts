import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http : HttpClient) { }



  //MEMOTEST
  
  public getTodosLasPelis(){
   // return this.http.get('https://restcountries.eu/rest/v2/name/united');
   return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=47b673c27802199bc125a15b89b80815');
  }
}
