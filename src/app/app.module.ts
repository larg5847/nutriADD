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
import { D1300Component } from './common/diabetes-info/dietas/d1300/d1300.component';
import { D1400Component } from './common/diabetes-info/dietas/d1400/d1400.component';
import { D1500Component } from './common/diabetes-info/dietas/d1500/d1500.component';
import { D1600Component } from './common/diabetes-info/dietas/d1600/d1600.component';
import { D1700Component } from './common/diabetes-info/dietas/d1700/d1700.component';
import { D1800Component } from './common/diabetes-info/dietas/d1800/d1800.component';
import { D2000Component } from './common/diabetes-info/dietas/d2000/d2000.component';
import { Dp2000Component } from './common/dislipidemia-info/dietas/dp2000/dp2000.component';
import { Dp1200Component } from './common/dislipidemia-info/dietas/dp1200/dp1200.component';
import { Dp1300Component } from './common/dislipidemia-info/dietas/dp1300/dp1300.component';
import { Dp1400Component } from './common/dislipidemia-info/dietas/dp1400/dp1400.component';
import { Dp1500Component } from './common/dislipidemia-info/dietas/dp1500/dp1500.component';
import { Dp1600Component } from './common/dislipidemia-info/dietas/dp1600/dp1600.component';
import { Dp1700Component } from './common/dislipidemia-info/dietas/dp1700/dp1700.component';
import { Dp1800Component } from './common/dislipidemia-info/dietas/dp1800/dp1800.component';
import { H1200Component } from './common/hipertension-info/dietas/h1200/h1200.component';
import { H1300Component } from './common/hipertension-info/dietas/h1300/h1300.component';
import { H1400Component } from './common/hipertension-info/dietas/h1400/h1400.component';
import { H1500Component } from './common/hipertension-info/dietas/h1500/h1500.component';
import { H1600Component } from './common/hipertension-info/dietas/h1600/h1600.component';
import { H1700Component } from './common/hipertension-info/dietas/h1700/h1700.component';
import { H1800Component } from './common/hipertension-info/dietas/h1800/h1800.component';
import { H2000Component } from './common/hipertension-info/dietas/h2000/h2000.component';
import { O1200Component } from './common/obesidad-info/dietas/o1200/o1200.component';
import { O1300Component } from './common/obesidad-info/dietas/o1300/o1300.component';
import { O1400Component } from './common/obesidad-info/dietas/o1400/o1400.component';
import { O1500Component } from './common/obesidad-info/dietas/o1500/o1500.component';
import { O1600Component } from './common/obesidad-info/dietas/o1600/o1600.component';
import { O1700Component } from './common/obesidad-info/dietas/o1700/o1700.component';
import { O1800Component } from './common/obesidad-info/dietas/o1800/o1800.component';
import { O2000Component } from './common/obesidad-info/dietas/o2000/o2000.component';
import { Pn1400Component } from './common/prenatal-info/dietas/pn1400/pn1400.component';
import { Pn1500Component } from './common/prenatal-info/dietas/pn1500/pn1500.component';
import { Pn1600Component } from './common/prenatal-info/dietas/pn1600/pn1600.component';
import { Pn1700Component } from './common/prenatal-info/dietas/pn1700/pn1700.component';
import { Pn1800Component } from './common/prenatal-info/dietas/pn1800/pn1800.component';
import { Pn2000Component } from './common/prenatal-info/dietas/pn2000/pn2000.component';
import { Pn2100Component } from './common/prenatal-info/dietas/pn2100/pn2100.component';
import { Pn2200Component } from './common/prenatal-info/dietas/pn2200/pn2200.component';


import { TablaAlimnegativosDiabetesComponent } from './common/diabetes-info/tabla-alimnegativos-diabetes/tabla-alimnegativos-diabetes.component';
import { TablaAlimnegativosDisliComponent } from './common/dislipidemia-info/tabla-alimnegativos-disli/tabla-alimnegativos-disli.component';
import { TablaAlimnegativosHiperComponent } from './common/hipertension-info/tabla-alimnegativos-hiper/tabla-alimnegativos-hiper.component';
import { TablaAlimnegativosObesidadComponent } from './common/obesidad-info/tabla-alimnegativos-obesidad/tabla-alimnegativos-obesidad.component';
import { TablaAlimnegativosPrenatalComponent } from './common/prenatal-info/tabla-alimnegativos-prenatal/tabla-alimnegativos-prenatal.component';
import { TablaAlimnegativosRenalComponent } from './common/renal-info/tabla-alimnegativos-renal/tabla-alimnegativos-renal.component';


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
    DislipidemiaMSelComponent,
    D1300Component,
    D1400Component,
    D1500Component,
    D1600Component,
    D1700Component,
    D1800Component,
    D2000Component,
    Dp2000Component,
    Dp1200Component,
    Dp1300Component,
    Dp1400Component,
    Dp1500Component,
    Dp1600Component,
    Dp1700Component,
    Dp1800Component,
    H1200Component,
    H1300Component,
    H1400Component,
    H1500Component,
    H1600Component,
    H1700Component,
    H1800Component,
    H2000Component,
    O1200Component,
    O1300Component,
    O1400Component,
    O1500Component,
    O1600Component,
    O1700Component,
    O1800Component,
    O2000Component,
    Pn1400Component,
    Pn1500Component,
    Pn1600Component,
    Pn1700Component,
    Pn1800Component,
    Pn2000Component,
    Pn2100Component,
    Pn2200Component,
    TablaAlimnegativosDiabetesComponent,
    TablaAlimnegativosDisliComponent,
    TablaAlimnegativosHiperComponent,
    TablaAlimnegativosObesidadComponent,
    TablaAlimnegativosPrenatalComponent,
    TablaAlimnegativosRenalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
