import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './negativos.json';
import { Tabla } from './ItablasDeRacones';

@Component({
  selector: 'app-tabla-alimnegativos-hiper',
  templateUrl: './tabla-alimnegativos-hiper.component.html',
  styleUrls: ['./tabla-alimnegativos-hiper.component.css']
})
export class TablaAlimnegativosHiperComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() { }

  ngOnInit(): void {
  }

}
