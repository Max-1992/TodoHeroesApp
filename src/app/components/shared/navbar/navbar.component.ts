import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public terminoBuscado:string;

  constructor( private _router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string){

    // Redireccionar al Nuevo componente
    this._router.navigate( [ '/search', termino ] );
    
  }

}
