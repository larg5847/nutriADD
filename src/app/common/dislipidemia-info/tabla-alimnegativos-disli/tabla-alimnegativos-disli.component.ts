import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './negativos.json';
import { Tabla } from './ItablasDeRacones';


@Component({
  selector: 'app-tabla-alimnegativos-disli',
  templateUrl: './tabla-alimnegativos-disli.component.html',
  styleUrls: ['./tabla-alimnegativos-disli.component.css']
})
export class TablaAlimnegativosDisliComponent implements OnInit {
  
  comida: Tabla[] = tablaraciones;

  constructor() { }

  ngOnInit(): void {
  }

}
