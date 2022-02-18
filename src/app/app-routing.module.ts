import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ContentComponent } from 'src/app/common/content/content.component';

//seccion diabetes
import { DiabetesInfoComponent } from 'src/app/common/diabetes-info/diabetes-info.component';
import { DiabetesMenusSelectComponent } from 'src/app/common/diabetes-info/diabetes-menus-select/diabetes-menus-select.component';
import { D1200Component } from 'src/app/common/diabetes-info/dietas/d1200/d1200.component';
import { TablaAlimentosDiabetesComponent } from 'src/app/common/diabetes-info/tabla-alimentos-diabetes/tabla-alimentos-diabetes.component';


//seccion dislipidemia
import { DislipidemiaInfoComponent } from './common/dislipidemia-info/dislipidemia-info.component';
import { DislipidemiaMSelComponent } from './common/dislipidemia-info/dislipidemia-m-sel/dislipidemia-m-sel.component';
import { TablaAlimentosDislipidemiaComponent } from './common/dislipidemia-info/tabla-alimentos-dislipidemia/tabla-alimentos-dislipidemia.component';


//seccon hipertension
import { HipertensionInfoComponent } from './common/hipertension-info/hipertension-info.component';
import { HipertensionMenusSelectComponent } from './common/hipertension-info/hipertension-menus-select/hipertension-menus-select.component';
import { TablaAlimentosHipertensionComponent } from './common/hipertension-info/tabla-alimentos-hipertension/tabla-alimentos-hipertension.component';


//seccion obesidad
import { ObesidadInfoComponent } from './common/obesidad-info/obesidad-info.component';
import { ObesidadMenusSelectComponent } from './common/obesidad-info/obesidad-menus-select/obesidad-menus-select.component';
import { O1200Component } from './common/obesidad-info/dietas/o1200/o1200.component';
import { O1300Component } from './common/obesidad-info/dietas/o1300/o1300.component';
import { O1400Component } from './common/obesidad-info/dietas/o1400/o1400.component';
import { O1500Component } from './common/obesidad-info/dietas/o1500/o1500.component';
import { O1600Component } from './common/obesidad-info/dietas/o1600/o1600.component';
import { O1700Component } from './common/obesidad-info/dietas/o1700/o1700.component';
import { O1800Component } from './common/obesidad-info/dietas/o1800/o1800.component';
import { O2000Component } from './common/obesidad-info/dietas/o2000/o2000.component';
import { TablasAlimentosObesidadComponent } from './common/obesidad-info/tablas-alimentos-obesidad/tablas-alimentos-obesidad.component';


//seccion prenatal
import { PrenatalInfoComponent } from './common/prenatal-info/prenatal-info.component';
import { PrenatalMenuSelectComponent } from './common/prenatal-info/prenatal-menu-select/prenatal-menu-select.component';
import { TablaAlimentosPrenatalComponent } from './common/prenatal-info/tabla-alimentos-prenatal/tabla-alimentos-prenatal.component';


//seccion renal
import { RenalInfoComponent } from './common/renal-info/renal-info.component';
import { RenalMenusSelectComponent } from './common/renal-info/renal-menus-select/renal-menus-select.component';
import { TablaAlimentosRenalComponent } from './common/renal-info/tabla-alimentos-renal/tabla-alimentos-renal.component';



const routes: Routes = [
  {path:'', redirectTo: '/principal', pathMatch: 'full'},
  {path: 'principal', component: ContentComponent},
  
  {path: 'diabetes', component: DiabetesInfoComponent},
  {path: 'menusDiabetes', component: DiabetesMenusSelectComponent},
  {path: 'menu1200Diabetes', component: D1200Component},
  {path: 'tablasDeEquivalentesDiabetes', component: TablaAlimentosDiabetesComponent},

  {path: 'dislipidemia', component: DislipidemiaInfoComponent},
  {path: 'menusDislipidemia', component: DislipidemiaMSelComponent},
  {path: 'tablasDeEquivalentesDislipidemia', component: TablaAlimentosDislipidemiaComponent},

  {path: 'hipertension', component: HipertensionInfoComponent},
  {path: 'menusHipertension', component: HipertensionMenusSelectComponent},
  {path: 'tablasDeEquivalentesHipertension', component: TablaAlimentosHipertensionComponent},

  {path: 'obesidad', component: ObesidadInfoComponent},
  {path: 'menusObesidad', component: ObesidadMenusSelectComponent},
  {path: 'menu1200Obesidad', component: O1200Component},
  {path: 'menu1300Obesidad', component: O1300Component},
  {path: 'menu1400Obesidad', component: O1400Component},
  {path: 'menu1500Obesidad', component: O1500Component},
  {path: 'menu1600Obesidad', component: O1600Component},
  {path: 'menu1700Obesidad', component: O1700Component},
  {path: 'menu1800Obesidad', component: O1800Component},
  {path: 'menu2000Obesidad', component: O2000Component},
  {path: 'tablasDeEquivalentesObesidad', component: TablasAlimentosObesidadComponent},

  {path: 'prenatal', component: PrenatalInfoComponent},
  {path: 'menusPrenatal', component: PrenatalMenuSelectComponent},
  {path: 'tablasDeEquivalentesPrenatal', component: TablaAlimentosPrenatalComponent},

  {path: 'renal', component: RenalInfoComponent},
  {path: 'menusRenal', component: RenalMenusSelectComponent},
  {path: 'tablasDeEquivalentesRenal', component: TablaAlimentosRenalComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
