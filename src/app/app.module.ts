import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { BindingComponent } from './clases/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { DirectivesComponent } from './clases/directives/directives.component';
import { ClasesComponent } from './clases/clases.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NavbarComponent } from './tienda/navbar/navbar.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CiclosvidaComponent } from './clases/ciclosvida/ciclosvida.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { NosotrosComponent } from './tienda/nosotros/nosotros.component';
import { ContactenosComponent } from './tienda/contactenos/contactenos.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ModelsComponent } from './clases/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    BindingComponent,
    CalculadoraComponent,
    DirectivesComponent,
    ClasesComponent,
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    CiclosvidaComponent,
    CatalogoComponent,
    NosotrosComponent,
    ContactenosComponent,
    NoEncontradoComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
