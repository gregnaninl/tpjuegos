import { Juego } from '../clases/juego'

export class Ppt extends Juego {

    arrayElementos : Array<any> = 
    [{valor: "piedra", path:"piedra.png"},
      {valor: "papel", path:"papel.png"},
      {valor:"tijera", path:"tijera.png"}
    ];
    opcionMaquina !: string;
    imagenMaquina !: string;
    opcionUsuario!: string;
    imagenesUsuario! : Array<any>;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra, Papel o Tijera",gano,jugador);  
      }

      public verificar() : boolean
      {
        switch(this.opcionMaquina)
        {
            case "piedra":
                if(this.opcionUsuario == "papel")
                 {
                     this.gano = true;
                 }
                 else
                 {
                     this.gano = false;
                 }
            break;
            case "papel":
               if(this.opcionUsuario == "tijera")
                {
                    this.gano = true;
                }
                else
                {
                    this.gano = false;
                }
                break;
            case "tijera":
            if(this.opcionUsuario == "piedra")
                {
                    this.gano = true;
                }
                else
                {
                    this.gano = false;
                }
                break;
        }
        if (this.gano) {
            return true;
          } else {
            return false;
          }
      }


      //Le muestro al usuario las opciones que tiene para elegir, la maquina elegira una al azar
      public empezarJuego()
      {
        let index = Math.floor((Math.random() * 2) + 0);
        this.opcionMaquina = this.arrayElementos[index]["valor"];
        console.log(this.opcionMaquina);
        this.imagenMaquina = this.arrayElementos[index]["path"];
        this.imagenesUsuario = this.arrayElementos;
      }


}
