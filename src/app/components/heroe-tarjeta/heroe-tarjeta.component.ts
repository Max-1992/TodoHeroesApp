import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() Index: number; 

  @Output() heroeseleccionado: EventEmitter<number>

  constructor( private router:Router ) {
    this.heroeseleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.Index] );
    // this.heroeseleccionado.emit( this.Index );
  }

}
