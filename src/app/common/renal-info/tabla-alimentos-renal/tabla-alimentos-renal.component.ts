import { Component, OnInit } from '@angular/core';


import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';



@Component({
  selector: 'app-tabla-alimentos-renal',
  templateUrl: './tabla-alimentos-renal.component.html',
  styleUrls: ['./tabla-alimentos-renal.component.css']
})
export class TablaAlimentosRenalComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() {
    console.log(this.comida)
   }

  ngOnInit(): void {
  }

}
