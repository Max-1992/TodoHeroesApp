import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'



//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service';



// Componentes 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/Home/home.component';
import { AboutComponent } from './components/About/about.component';
import { HeroesComponent } from './components/Heroes/heroes.component';
import { HeroeComponent } from './components/Heroe/heroe.component';
import { SearchComponent } from './components/Search/search.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroeTarjetaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
