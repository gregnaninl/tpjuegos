import { Component, OnInit , Input} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jugadores } from 'src/app/clases/jugadores';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css']
})
export class TablaResultadosComponent implements OnInit {

  public lista : any;
  public listadoJugadores!: Object;
  public  data : Jugadores[];

  @Input() juegoFiltro! : string;

  constructor( private db : AngularFirestore) {
    this.data= new Array<Jugadores>();
   }

  ngOnInit(): void {
  this.cargarJugadores();   

  console.log(this.juegoFiltro);
  }

  public cargarJugadores(){

    this.db.collection('jugadores').valueChanges().subscribe(
      (res)=>{
        this.listadoJugadores = res;
       // console.log(this.listadoJugadores);
       this.cargarTabla(this.listadoJugadores);         
          },
      (error)=> console.log(error)     
      );

  }

  cargarTabla(listado : Object){
    const datos = Object.values(listado);
    if(this.juegoFiltro== 'Todos'){
      this.data= datos;
      this.data.sort((a, b) => {
        return <any>new Date(b.fecha) - <any>new Date(a.fecha);
      });
    }else{
      this.data= datos.filter(dato=> dato.juego === this.juegoFiltro);
      this.data.sort((a, b) => {
        return <any>new Date(b.fecha) - <any>new Date(a.fecha);
      });
    }      
  }
  
}
