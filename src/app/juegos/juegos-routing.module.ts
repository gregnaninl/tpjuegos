import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaResultadosComponent } from '../pages/juegos/componentes/tabla-resultados/tabla-resultados.component';
import { EncuestaComponent } from '../pages/juegos/encuesta/encuesta.component';
import { HomejuegosComponent } from '../pages/juegos/homejuegos/homejuegos.component';
import { JuegoAnagramaComponent } from '../pages/juegos/juego-anagrama/juego-anagrama.component';
import { JuegoMemotestComponent } from '../pages/juegos/juego-memotest/juego-memotest.component';
import { JuegoSumandoComponent } from '../pages/juegos/juego-sumando/juego-sumando.component';
import { JuegoTatetiComponent } from '../pages/juegos/juego-tateti/juego-tateti.component';
import { PiedraComponent } from '../pages/juegos/piedra/piedra.component';



const routes: Routes = [
  { path: 'piedra', component: PiedraComponent },
  { path: 'tateti', component: JuegoTatetiComponent},
  { path: 'anagrama', component: JuegoAnagramaComponent },
  { path: 'sumando', component: JuegoSumandoComponent },
  { path: 'resultados', component: TablaResultadosComponent },
  {path: 'encuesta', component: EncuestaComponent},
  { path: 'memotest', component: JuegoMemotestComponent},
  {path: '', component: HomejuegosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
