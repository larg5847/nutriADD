import { Component, OnInit } from '@angular/core';


import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';


@Component({
  selector: 'app-tablas-alimentos-obesidad',
  templateUrl: './tablas-alimentos-obesidad.component.html',
  styleUrls: ['./tablas-alimentos-obesidad.component.css']
})
export class TablasAlimentosObesidadComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() {
    console.log(this.comida)
   }

  ngOnInit(): void {
  }

}
