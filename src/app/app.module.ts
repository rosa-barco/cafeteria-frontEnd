import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RecetasListComponent } from './recetas/recetas-list/recetas-list.component';
import { CatFiltroPipe, IdFiltroPipe, NombresFiltroPipe, RecetaFiltroPipe } from './recetas/recetas-filtro.pipe';
import { InicioListComponent } from './inicio/inicio-list/inicio-list.component';
import { CatsFiltroPipe, NombreFiltroPipe, RecetasFiltroPipe } from './inicio/inicio-filtro.pipe';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RecetasListComponent,
    RecetaFiltroPipe,
    CatFiltroPipe,
    IdFiltroPipe,
    InicioListComponent,
    RecetasFiltroPipe,
    CatsFiltroPipe,
    ProductosComponent,
    VentasComponent,
    UsuariosComponent,
    NombreFiltroPipe,
    NombresFiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
