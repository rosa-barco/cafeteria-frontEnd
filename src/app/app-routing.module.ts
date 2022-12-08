import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioListComponent } from './inicio/inicio-list/inicio-list.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasListComponent } from './recetas/recetas-list/recetas-list.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentasComponent } from './ventas/ventas.component';
import { VigilanteGuard } from './vigilante.guard';

const appRoutes: Routes = [
  {path:'', component: LoginComponent },
  {path:'Inicio', component: InicioListComponent , canActivate: [VigilanteGuard]},
  {path:'Sesion', component: LoginComponent , canActivate: [VigilanteGuard]},
  {path:'Recetas',component: RecetasListComponent, canActivate: [VigilanteGuard]},
  {path:'Registros/Usuarios',component: UsuariosComponent, canActivate: [VigilanteGuard]},
  {path:'Registros/Ventas',component: VentasComponent, canActivate: [VigilanteGuard]},
  {path:'Registros/Productos',component: ProductosComponent, canActivate: [VigilanteGuard]},
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }