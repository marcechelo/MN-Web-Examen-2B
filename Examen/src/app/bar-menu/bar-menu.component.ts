import { Component, OnInit } from '@angular/core';
import {ActorService} from '../Servicios/actor.service';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';
import * as Cookies from 'js-cookie';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {

  items: any;
  usuarioDetalle; any;
  nombreUsuario: '';
  idUsuario = Cookies.getJSON('cookieWeb').id;

  constructor(private _actorServicio: ActorService,
              private _credenciales: CredencialesService,
              private _router: Router,
              private httpClient: HttpClient) {

    this._actorServicio.mensajeActual3.subscribe(mensaje => this.items = mensaje);
  }

  ngOnInit() {
    this.getNombreUsuario();
  }

  validarCookie() {
    const json = Cookies.getJSON('cookieWeb');
    if (json.estado === 'true') {
      // console.log(Cookies.get('marcelo'))
      this._credenciales.cookies();
      const rutaHomeUsuario = ['/usuario', json.id, 'home'];
      this._router.navigate(rutaHomeUsuario);

    } else {
      console.log('error');
    }
  }

  getNombreUsuario() {
    this.httpClient.get(`http://localhost:1337/Usuario?id=${this.idUsuario}`).subscribe((data: any[]) => {
        this.usuarioDetalle = data;
        this.nombreUsuario = data[0].nombre.concat(' ', data[0].apellido);
      }
    );


  }

}
