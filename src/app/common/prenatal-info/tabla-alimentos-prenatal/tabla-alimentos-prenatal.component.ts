import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';


@Component({
  selector: 'app-tabla-alimentos-prenatal',
  templateUrl: './tabla-alimentos-prenatal.component.html',
  styleUrls: ['./tabla-alimentos-prenatal.component.css']
})
export class TablaAlimentosPrenatalComponent implements OnInit {

  comida: Tabla[] = tablaraciones;
  //item1:Tabla = this.comida[0];
  

  constructor() {
    //console.log(this.item1)
    //console.log(this.items)
   }


  ngOnInit(): void {
  }

  

}
