import { Component, OnInit } from '@angular/core';


import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';




@Component({
  selector: 'app-tabla-alimentos-diabetes',
  templateUrl: './tabla-alimentos-diabetes.component.html',
  styleUrls: ['./tabla-alimentos-diabetes.component.css']
})
export class TablaAlimentosDiabetesComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() {
    console.log(this.comida)
   }

  ngOnInit(): void {
  }

}
