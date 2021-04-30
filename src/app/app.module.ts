import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';

import { AuthService } from './services/auth.service';
import { JuegosService } from './services/juegos.service';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PiedraComponent } from './pages/juegos/piedra/piedra.component';
import { TatetiComponent } from './pages/juegos/componentes/tateti/tateti.component';
import { HomejuegosComponent } from './pages/juegos/homejuegos/homejuegos.component';
import { PppComponent } from './pages/juegos/componentes/ppp/ppp.component';
import { SumandoComponent } from './pages/juegos/componentes/sumando/sumando.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { JuegoAnagramaComponent } from './pages/juegos/juego-anagrama/juego-anagrama.component';
import { AnagramaComponent } from './pages/juegos/componentes/anagrama/anagrama.component';
import { TablaResultadosComponent } from './pages/juegos/componentes/tabla-resultados/tabla-resultados.component';
import { JuegoSumandoComponent } from './pages/juegos/juego-sumando/juego-sumando.component';
import { ListadosComponent } from './pages/listados/listados.component';
import { JuegoTatetiComponent } from './pages/juegos/juego-tateti/juego-tateti.component';


 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuiensoyComponent,
    RegistroComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ChatComponent,
    PiedraComponent,
    TatetiComponent,
    HomejuegosComponent,
    PppComponent,
    SumandoComponent,
    JuegoAnagramaComponent,
    AnagramaComponent,
    TablaResultadosComponent,
    JuegoSumandoComponent,
    ListadosComponent,
    JuegoTatetiComponent ,
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule 
  ],
  providers: [AngularFirestore,AuthService ,JuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
