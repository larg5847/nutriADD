import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ContentComponent } from 'src/app/common/content/content.component';

//seccion diabetes
import { DiabetesInfoComponent } from 'src/app/common/diabetes-info/diabetes-info.component';
import { DiabetesMenusSelectComponent } from 'src/app/common/diabetes-info/diabetes-menus-select/diabetes-menus-select.component';
import { D1200Component } from 'src/app/common/diabetes-info/dietas/d1200/d1200.component';
import { D1300Component } from './common/diabetes-info/dietas/d1300/d1300.component';
import { D1400Component } from './common/diabetes-info/dietas/d1400/d1400.component';
import { D1500Component } from './common/diabetes-info/dietas/d1500/d1500.component';
import { D1600Component } from './common/diabetes-info/dietas/d1600/d1600.component';
import { D1700Component } from './common/diabetes-info/dietas/d1700/d1700.component';
import { D1800Component } from './common/diabetes-info/dietas/d1800/d1800.component';
import { D2000Component } from './common/diabetes-info/dietas/d2000/d2000.component';
import { TablaAlimentosDiabetesComponent } from 'src/app/common/diabetes-info/tabla-alimentos-diabetes/tabla-alimentos-diabetes.component';


//seccion dislipidemia
import { DislipidemiaInfoComponent } from './common/dislipidemia-info/dislipidemia-info.component';
import { DislipidemiaMSelComponent } from './common/dislipidemia-info/dislipidemia-m-sel/dislipidemia-m-sel.component';
import { Dp1200Component } from './common/dislipidemia-info/dietas/dp1200/dp1200.component';
import { Dp1300Component } from './common/dislipidemia-info/dietas/dp1300/dp1300.component';
import { Dp1400Component } from './common/dislipidemia-info/dietas/dp1400/dp1400.component';
import { Dp1500Component } from './common/dislipidemia-info/dietas/dp1500/dp1500.component';
import { Dp1600Component } from './common/dislipidemia-info/dietas/dp1600/dp1600.component';
import { Dp1700Component } from './common/dislipidemia-info/dietas/dp1700/dp1700.component';
import { Dp1800Component } from './common/dislipidemia-info/dietas/dp1800/dp1800.component';
import { Dp2000Component } from './common/dislipidemia-info/dietas/dp2000/dp2000.component';
import { TablaAlimentosDislipidemiaComponent } from './common/dislipidemia-info/tabla-alimentos-dislipidemia/tabla-alimentos-dislipidemia.component';


//seccon hipertension
import { HipertensionInfoComponent } from './common/hipertension-info/hipertension-info.component';
import { HipertensionMenusSelectComponent } from './common/hipertension-info/hipertension-menus-select/hipertension-menus-select.component';
import { H1200Component } from './common/hipertension-info/dietas/h1200/h1200.component';
import { H1300Component } from './common/hipertension-info/dietas/h1300/h1300.component';
import { H1400Component } from './common/hipertension-info/dietas/h1400/h1400.component';
import { H1500Component } from './common/hipertension-info/dietas/h1500/h1500.component';
import { H1600Component } from './common/hipertension-info/dietas/h1600/h1600.component';
import { H1700Component } from './common/hipertension-info/dietas/h1700/h1700.component';
import { H1800Component } from './common/hipertension-info/dietas/h1800/h1800.component';
import { H2000Component } from './common/hipertension-info/dietas/h2000/h2000.component';
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
import { Pn1400Component } from './common/prenatal-info/dietas/pn1400/pn1400.component';
import { Pn1500Component } from './common/prenatal-info/dietas/pn1500/pn1500.component';
import { Pn1600Component } from './common/prenatal-info/dietas/pn1600/pn1600.component';
import { Pn1700Component } from './common/prenatal-info/dietas/pn1700/pn1700.component';
import { Pn1800Component } from './common/prenatal-info/dietas/pn1800/pn1800.component';
import { Pn2000Component } from './common/prenatal-info/dietas/pn2000/pn2000.component';
import { Pn2100Component } from './common/prenatal-info/dietas/pn2100/pn2100.component';
import { Pn2200Component } from './common/prenatal-info/dietas/pn2200/pn2200.component';
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
  {path: 'menu1300Diabetes', component: D1300Component},
  {path: 'menu1400Diabetes', component: D1400Component},
  {path: 'menu1500Diabetes', component: D1500Component},
  {path: 'menu1600Diabetes', component: D1600Component},
  {path: 'menu1700Diabetes', component: D1700Component},
  {path: 'menu1800Diabetes', component: D1800Component},
  {path: 'menu2000Diabetes', component: D2000Component},
  {path: 'tablasDeEquivalentesDiabetes', component: TablaAlimentosDiabetesComponent},

  {path: 'dislipidemia', component: DislipidemiaInfoComponent},
  {path: 'menusDislipidemia', component: DislipidemiaMSelComponent},
  {path: 'menu1200Dislipidemia', component: Dp1200Component},
  {path: 'menu1300Dislipidemia', component: Dp1300Component},
  {path: 'menu1400Dislipidemia', component: Dp1400Component},
  {path: 'menu1500Dislipidemia', component: Dp1500Component},
  {path: 'menu1600Dislipidemia', component: Dp1600Component},
  {path: 'menu1700Dislipidemia', component: Dp1700Component},
  {path: 'menu1800Dislipidemia', component: Dp1800Component},
  {path: 'menu2000Dislipidemia', component: Dp2000Component},
  {path: 'tablasDeEquivalentesDislipidemia', component: TablaAlimentosDislipidemiaComponent},

  {path: 'hipertension', component: HipertensionInfoComponent},
  {path: 'menusHipertension', component: HipertensionMenusSelectComponent},
  {path: 'menu1200Hipertension', component: H1200Component},
  {path: 'menu1300Hipertension', component: H1300Component},
  {path: 'menu1400Hipertension', component: H1400Component},
  {path: 'menu1500Hipertension', component: H1500Component},
  {path: 'menu1600Hipertension', component: H1600Component},
  {path: 'menu1700Hipertension', component: H1700Component},
  {path: 'menu1800Hipertension', component: H1800Component},
  {path: 'menu2000Hipertension', component: H2000Component},
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
  {path: 'menu1400Prenatal', component: Pn1400Component},
  {path: 'menu1500Prenatal', component: Pn1500Component},
  {path: 'menu1600Prenatal', component: Pn1600Component},
  {path: 'menu1700Prenatal', component: Pn1700Component},
  {path: 'menu1800Prenatal', component: Pn1800Component},
  {path: 'menu2000Prenatal', component: Pn2000Component},
  {path: 'menu2100Prenatal', component: Pn2100Component},
  {path: 'menu2200Prenatal', component: Pn2200Component},
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
