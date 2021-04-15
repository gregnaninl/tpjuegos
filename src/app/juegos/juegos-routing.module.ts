import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomejuegosComponent } from '../pages/juegos/homejuegos/homejuegos.component';
import { PiedraComponent } from '../pages/juegos/piedra/piedra.component';
import { TatetiComponent } from '../pages/juegos/tateti/tateti.component';


const routes: Routes = [
  { path: 'piedra', component: PiedraComponent },
  { path: 'tateti', component: TatetiComponent },
  {path: '', component: HomejuegosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
