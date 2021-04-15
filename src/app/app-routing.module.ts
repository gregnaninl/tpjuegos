import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent} ,
  {path: 'quien', component : QuiensoyComponent} ,
  {path: 'registro', component : RegistroComponent} ,  
  { path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule) },
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
