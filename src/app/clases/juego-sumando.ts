import { Juego } from '../clases/juego'

export class JuegoSumando extends  Juego {
    fila1: number = 0;
    fila2: number = 0;
    fila3: number = 0;
    fila4: number = 0;
    fila5: number = 0; 
    respuesta : number = 15;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Suma 15",gano,jugador);
     
    
      
      }
    public verificar() {
        if (this.fila1 == this.respuesta  && this.fila2 == this.respuesta && this.fila3 == this.respuesta && this.fila4 == this.respuesta && this.fila5 == this.respuesta ) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     
      public retornarAyuda() {
        if(this.fila1 != this.respuesta){
          return "Alguna de las filas no suman 15";
        }else
        {
          return "Son iguales";
        }
        
      }
}
