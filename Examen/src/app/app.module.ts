import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatRadioModule, MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import {RUTAS} from './app.rutas';
import { CarritoComponent } from './carrito/carrito.component';
import { ActorComponent } from './actor/actor.component';
import { ActorDeatalleComponent } from './actor-deatalle/actor-deatalle.component';
import { ActorGeneralComponent } from './actor-general/actor-general.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { PeliculaDetalleDosComponent } from './pelicula-detalle-dos/pelicula-detalle-dos.component';
import { ModalDatosComponent } from './modal-datos/modal-datos.component';
import { ModalDatosDosComponent } from './modal-datos-dos/modal-datos-dos.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { SeleccionTranferenciaComponent } from './seleccion-tranferencia/seleccion-tranferencia.component';
import {AccordionModule, ConfirmDialogModule, FieldsetModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarMenuComponent,
    CarritoComponent,
    ActorComponent,
    ActorDeatalleComponent,
    ActorGeneralComponent,
    PeliculaComponent,
    PeliculaDetalleComponent,
    PeliculaDetalleDosComponent,
    ModalDatosComponent,
    ModalDatosDosComponent,
    LoginComponent,
    NotFoundComponent,
    AutorizacionComponent,
    UsuarioComponent,
    UsuarioDetalleComponent,
    SeleccionTranferenciaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS, {useHash: true}

    ),
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    FieldsetModule,
    AccordionModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
