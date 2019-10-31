import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public mostrarHeroe:Heroe[] = [];
  terminoBuscado:string;
  
  constructor( private _heroesService:HeroesService,
               private _activateRouter:ActivatedRoute
    ) { }

  ngOnInit() {
      this._activateRouter.params.subscribe( params => {
        this.mostrarHeroe = this._heroesService.buscarHeroes(params[ 'termino' ]);
        this.terminoBuscado = params[ 'termino' ];
        console.log( this.mostrarHeroe )
      })
  }

}
