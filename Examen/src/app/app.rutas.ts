import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CarritoComponent} from './carrito/carrito.component';
import {PeliculaComponent} from './pelicula/pelicula.component';
import {ActorComponent} from './actor/actor.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AutorizacionService} from './autorizacion.service';
import {UsuarioDetalleComponent} from './usuario-detalle/usuario-detalle.component';
import {SeleccionTranferenciaComponent} from './seleccion-tranferencia/seleccion-tranferencia.component';


export const RUTAS: Routes = [

  {
    path: 'usuario/:id/home',
    component: HomeComponent,
    canActivate: [AutorizacionService],
  },
  {
    path: 'usuario/:id',
    component: UsuarioDetalleComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: 'seleccionTransferencia',
    component: SeleccionTranferenciaComponent,

  },
  {
    path: 'actor/:id/pelicula/:idPelicula',
    component: PeliculaComponent
  },
  {
    path: 'actor/:id',
    component: ActorComponent,
    children:
      [{

        path: 'pelicula/:idPelicula',
        component: PeliculaComponent

      }]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
