import { Component, OnInit } from '@angular/core';


import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';


@Component({
  selector: 'app-tabla-alimentos-hipertension',
  templateUrl: './tabla-alimentos-hipertension.component.html',
  styleUrls: ['./tabla-alimentos-hipertension.component.css']
})
export class TablaAlimentosHipertensionComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() {
    console.log(this.comida)
   }

  ngOnInit(): void {
  }

}
