import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { ClasesComponent } from './clases/clases.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { NosotrosComponent } from './tienda/nosotros/nosotros.component';
import { ContactenosComponent } from './tienda/contactenos/contactenos.component';

const routes: Routes = [
  {path: 'clase', component: ClasesComponent},
  {path: '', redirectTo: 'tienda', pathMatch: 'full'},
  {path: 'tienda', component: TiendaComponent, children: [
    {path: 'inicio', component: InicioComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'contactenos', component: ContactenosComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}
  ]},
  {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }