import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './negativos.json';
import { Tabla } from './ItablasDeRacones';

@Component({
  selector: 'app-tabla-alimnegativos-prenatal',
  templateUrl: './tabla-alimnegativos-prenatal.component.html',
  styleUrls: ['./tabla-alimnegativos-prenatal.component.css']
})
export class TablaAlimnegativosPrenatalComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() { }

  ngOnInit(): void {
  }

}
