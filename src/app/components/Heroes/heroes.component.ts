import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  public heroes:Heroe[];

  constructor( private _HeroesServices:HeroesService, private _router:Router ) {
      
   }

  ngOnInit() {
    this.heroes = this._HeroesServices.getHeroes();
  }

  public verHeroe( index:number ){
    this._router.navigate( ['/heroe', index] );
  }

}


