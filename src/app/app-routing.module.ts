import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ContentComponent } from 'src/app/common/content/content.component';

//seccion diabetes
import { DiabetesInfoComponent } from 'src/app/common/diabetes-info/diabetes-info.component';
import { DiabetesMenusSelectComponent } from 'src/app/common/diabetes-info/diabetes-menus-select/diabetes-menus-select.component';
import { D1200Component } from 'src/app/common/diabetes-info/dietas/d1200/d1200.component';
import { TablaAlimentosDiabetesComponent } from 'src/app/common/diabetes-info/tabla-alimentos-diabetes/tabla-alimentos-diabetes.component';


//seccion dislipidemia
import { DislipidemiaInfoComponent } from './common/dislipidemia-info/dislipidemia-info.component';
//import { DislipidemiaMenusSelectComponent } from './common/dislipidemia-info/dislipidemia-menus-select/dislipidemia-menus-select/dislipidemia-menus-select.component';
import { TablaAlimentosDislipidemiaComponent } from './common/dislipidemia-info/tabla-alimentos-dislipidemia/tabla-alimentos-dislipidemia.component';


//seccon hipertension
import { HipertensionInfoComponent } from './common/hipertension-info/hipertension-info.component';
import { HipertensionMenusSelectComponent } from './common/hipertension-info/hipertension-menus-select/hipertension-menus-select.component';
import { TablaAlimentosHipertensionComponent } from './common/hipertension-info/tabla-alimentos-hipertension/tabla-alimentos-hipertension.component';


//seccion obesidad
import { ObesidadInfoComponent } from './common/obesidad-info/obesidad-info.component';
import { ObesidadMenusSelectComponent } from './common/obesidad-info/obesidad-menus-select/obesidad-menus-select.component';
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
  //{path: 'menusDislipidemia', component: DislipidemiaMenusSelectComponent},
  {path: 'tablasDeEquivalentesDislipidemia', component: TablaAlimentosDislipidemiaComponent},

  {path: 'hipertension', component: HipertensionInfoComponent},
  {path: 'menusHipertension', component: HipertensionMenusSelectComponent},
  {path: 'tablasDeEquivalentesHipertension', component: TablaAlimentosHipertensionComponent},

  {path: 'obesidad', component: ObesidadInfoComponent},
  {path: 'menusObesidad', component: ObesidadMenusSelectComponent},
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
