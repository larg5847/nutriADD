import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './negativos.json';
import { Tabla } from './ItablasDeRacones';


@Component({
  selector: 'app-tabla-alimnegativos-renal',
  templateUrl: './tabla-alimnegativos-renal.component.html',
  styleUrls: ['./tabla-alimnegativos-renal.component.css']
})
export class TablaAlimnegativosRenalComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() { }

  ngOnInit(): void {
  }

}
