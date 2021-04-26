import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego
{
  arrayAnagrama : Array<any> = [
   {
    "palabra": ["ADERABN","BERANDA","AABNDER"],
    "correcta" : "BANDERA"
   },
   {
    "palabra": ["LANOBI","AIBONL","BALONI"],
    "correcta" : "ALBINO"
   },

   {
    "palabra": ["RESAP","PRSAE","EPRSA"],
    "correcta" : "PERAS"
   },

   {
    "palabra": ["NTRE","ETRN","TERN"],
    "correcta" : "TREN"
   },
   {
    "palabra": ["BÚFOLT","LOTFBÚ","ÚBOFLT"],
    "correcta" : "FÚTBOL"
   },
   {
    "palabra": ["TENMA","ATMEN","ENTAM"],
    "correcta" : "MENTA"
   },
   {
    "palabra": ["APLEOT","PALTOE","EPALTO"],
    "correcta" : "PELOTA"
   },
   {
    "palabra": ["ZECVREA","AVCREEZ","AECERZV"],
    "correcta" : "CERVEZA"
   },
   {
    "palabra": ["SÚCIMA","MSCAÚI","ÚMISCA"],
    "correcta" : "MÚSICA"
   },

   {
    "palabra": ["UPERTA","ATUREP","PREUAT"],
    "correcta" : "PUERTA"
   },

   {
    "palabra": ["MJANÓ","AJÓMN","ÓJMAN"],
    "correcta" : "JAMÓN"
   },

   {
    "palabra": ["SEUQO","SOQEU","OQSEU"],
    "correcta" : "QUESO"
   }];
  palabraDesorganizada! : string;
  palabraCorrecta! : string;
  palabraIngresada! : string;

  constructor(nombre?: string, gano?: boolean, jugador?:string) {
    super("Anagrama",gano,jugador);  
  }

  public verificar()
  {
    this.gano = false;
    if(this.palabraIngresada == this.palabraCorrecta)
    {
        this.gano = true;
    }
    if (this.gano) {
        return true;
      } else {
        return false;
      }
  }

  public generarPalabra()
  {
    let index = Math.floor((Math.random() * 11) + 0);
    let subIndex = Math.floor((Math.random() * 2) + 0);
    console.log(this.arrayAnagrama[index]["palabra"][subIndex]);
    this.palabraDesorganizada = this.arrayAnagrama[index]["palabra"][subIndex];
    this.palabraCorrecta = this.arrayAnagrama[index]["correcta"];
  }
}