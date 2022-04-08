import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './negativos.json';
import { Tabla } from './ItablasDeRacones';

@Component({
  selector: 'app-tabla-alimnegativos-obesidad',
  templateUrl: './tabla-alimnegativos-obesidad.component.html',
  styleUrls: ['./tabla-alimnegativos-obesidad.component.css']
})
export class TablaAlimnegativosObesidadComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() { }

  ngOnInit(): void {
  }

}
