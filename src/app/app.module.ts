import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContentComponent } from './common/content/content.component';
import { DiabetesInfoComponent } from './common/diabetes-info/diabetes-info.component';
import { DiabetesMenusSelectComponent } from './common/diabetes-info/diabetes-menus-select/diabetes-menus-select.component';
import { D1200Component } from './common/diabetes-info/dietas/d1200/d1200.component';
import { TablaAlimentosDiabetesComponent } from './common/diabetes-info/tabla-alimentos-diabetes/tabla-alimentos-diabetes.component';
import { PrincipalPatologiasComponent } from './common/patologias/principal-patologias/principal-patologias.component';
import { SeleccionDietasComponent } from './common/patologias/seleccion-dietas/seleccion-dietas.component';
import { DespliegueDietaComponent } from './common/patologias/despliegue-dieta/despliegue-dieta.component';
import { TablaDeAlimentosComponent } from './common/patologias/tabla-de-alimentos/tabla-de-alimentos.component';
import { DislipidemiaInfoComponent } from './common/dislipidemia-info/dislipidemia-info.component';
import { TablaAlimentosDislipidemiaComponent } from './common/dislipidemia-info/tabla-alimentos-dislipidemia/tabla-alimentos-dislipidemia.component';
//import { DislipidemiaMenusSelectComponent } from './common/dislipidemia-info/dislipidemia-menus-select/dislipidemia-menus-select/dislipidemia-menus-select.component';
import { HipertensionMenusSelectComponent } from './common/hipertension-info/hipertension-menus-select/hipertension-menus-select.component';
import { TablaAlimentosHipertensionComponent } from './common/hipertension-info/tabla-alimentos-hipertension/tabla-alimentos-hipertension.component';
import { HipertensionInfoComponent } from './common/hipertension-info/hipertension-info.component';
import { ObesidadInfoComponent } from './common/obesidad-info/obesidad-info.component';
import { ObesidadMenusSelectComponent } from './common/obesidad-info/obesidad-menus-select/obesidad-menus-select.component';
import { TablasAlimentosObesidadComponent } from './common/obesidad-info/tablas-alimentos-obesidad/tablas-alimentos-obesidad.component';
import { TablasAlimentosLactanteComponent } from './common/lactante-info/tablas-alimentos-lactante/tablas-alimentos-lactante.component';
import { LactanteInfoComponent } from './common/lactante-info/lactante-info.component';
import { LactateMenusSelectComponent } from './common/lactante-info/lactate-menus-select/lactate-menus-select.component';
import { RenalMenusSelectComponent } from './common/renal-info/renal-menus-select/renal-menus-select.component';
import { TablaAlimentosRenalComponent } from './common/renal-info/tabla-alimentos-renal/tabla-alimentos-renal.component';
import { RenalInfoComponent } from './common/renal-info/renal-info.component';
import { PrenatalInfoComponent } from './common/prenatal-info/prenatal-info.component';
import { PrenatalMenuSelectComponent } from './common/prenatal-info/prenatal-menu-select/prenatal-menu-select.component';
import { TablaAlimentosPrenatalComponent } from './common/prenatal-info/tabla-alimentos-prenatal/tabla-alimentos-prenatal.component';
import { DislipidemiaMSelComponent } from './common/dislipidemia-info/dislipidemia-m-sel/dislipidemia-m-sel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    DiabetesInfoComponent,
    DiabetesMenusSelectComponent,
    D1200Component,
    TablaAlimentosDiabetesComponent,
    PrincipalPatologiasComponent,
    SeleccionDietasComponent,
    DespliegueDietaComponent,
    TablaDeAlimentosComponent,
    DislipidemiaInfoComponent,
    TablaAlimentosDislipidemiaComponent,
    HipertensionMenusSelectComponent,
    TablaAlimentosHipertensionComponent,
    HipertensionInfoComponent,
    ObesidadInfoComponent,
    ObesidadMenusSelectComponent,
    TablasAlimentosObesidadComponent,
    TablasAlimentosLactanteComponent,
    LactanteInfoComponent,
    LactateMenusSelectComponent,
    RenalMenusSelectComponent,
    TablaAlimentosRenalComponent,
    RenalInfoComponent,
    PrenatalInfoComponent,
    PrenatalMenuSelectComponent,
    TablaAlimentosPrenatalComponent,
    DislipidemiaMSelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
