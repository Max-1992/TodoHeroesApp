import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';




@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

    heroe:Heroe;
    casa:string;

    constructor( private activatedRoute:ActivatedRoute, private _HeroesService:HeroesService ){
        this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._HeroesService.getHeroe( params[ 'id' ] );
        this.casa = this._HeroesService.getHomeHeroe( this.heroe );
        
        } )
    }
}


