import { Component, OnInit } from '@angular/core';


import  tablaraciones  from './negativos.json';
import { Tabla } from './ItablasDeRacones';

@Component({
  selector: 'app-tabla-alimnegativos-diabetes',
  templateUrl: './tabla-alimnegativos-diabetes.component.html',
  styleUrls: ['./tabla-alimnegativos-diabetes.component.css']
})
export class TablaAlimnegativosDiabetesComponent implements OnInit {

  comida: Tabla[] = tablaraciones;
  
  constructor() { }

  ngOnInit(): void {
  }

}
