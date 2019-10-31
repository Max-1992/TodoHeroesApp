// Importar Modulos del Router de Angular
import { RouterModule, Routes } from '@angular/router';


//Importar modules de componentes
import { HomeComponent } from './components/Home/home.component';
import { AboutComponent } from './components/About/about.component';
import { HeroesComponent } from './components/Heroes/heroes.component'
import { HeroeComponent } from './components/Heroe/heroe.component';
import { SearchComponent } from './components/Search/search.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

// Exportar nuestro módulo del ruting

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
    
