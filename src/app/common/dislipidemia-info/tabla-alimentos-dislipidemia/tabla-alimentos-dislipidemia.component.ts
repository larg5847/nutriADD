import { Component, OnInit } from '@angular/core';


import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';



@Component({
  selector: 'app-tabla-alimentos-dislipidemia',
  templateUrl: './tabla-alimentos-dislipidemia.component.html',
  styleUrls: ['./tabla-alimentos-dislipidemia.component.css']
})
export class TablaAlimentosDislipidemiaComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() {
    console.log(this.comida)
   }

  ngOnInit(): void {
  }

}
