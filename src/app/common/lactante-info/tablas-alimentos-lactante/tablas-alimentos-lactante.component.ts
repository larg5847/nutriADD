import { Component, OnInit } from '@angular/core';

import  tablaraciones  from './tablas.json';
import { Tabla } from './ItablasDeRacones';


@Component({
  selector: 'app-tablas-alimentos-lactante',
  templateUrl: './tablas-alimentos-lactante.component.html',
  styleUrls: ['./tablas-alimentos-lactante.component.css']
})
export class TablasAlimentosLactanteComponent implements OnInit {

  comida: Tabla[] = tablaraciones;

  constructor() {
    console.log(this.comida)
   }

  ngOnInit(): void {
  }

}
