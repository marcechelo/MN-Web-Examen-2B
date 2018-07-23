import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Cookies from 'js-cookie';
import {ActorService} from '../Servicios/actor.service';
import {any} from 'codelyzer/util/function';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seleccion-tranferencia',
  templateUrl: './seleccion-tranferencia.component.html',
  styleUrls: ['./seleccion-tranferencia.component.css']
})
export class SeleccionTranferenciaComponent implements OnInit {

  usuario = {
    username: '',
    nombre: '',
    apellido: '',
    imagen: '',
    actores: '',
  };

  peliculaDetalle = {
    nombre: '',
    anioLanzamiento: '',
    rating: 0,
    actoresPrincipales: '',
    sinopsis: '',
    imagen: '',
    precio: '',
    estado: true,
    id: 0
  };

  idUsuario = Cookies.getJSON('cookieWeb').id;
  transferencia = [];
  actores = [];
  idUsuarioSolicitado = 0;
  arregloPeliculas = [];

  constructor(private httpClient: HttpClient,
              private _actorServicio: ActorService,
              private httpClient2: HttpClient,
              private httpClient3: HttpClient,
              private httpClient4: HttpClient,
              private _credenciales: CredencialesService,
              private _router: Router) {
  }

  ngOnInit() {

    this._actorServicio.mensajaActualTransferencia.subscribe(mensaje => this.transferencia = mensaje);
    this.httpClient.get(`http://localhost:1337/Usuario?id=${this.idUsuario}`).subscribe((data: any[]) => {
        this.usuario = data[0];
        // console.log(data[0]);
      }
    );

    this.httpClient2.get(`http://localhost:1337/Actor?usuario=${this.idUsuario}`).subscribe((data: any []) => {
        this.actores = data;
        const peliculas = [];

        this.actores.forEach(function (value, index) {
          value.peliculas.forEach(function (value2) {
            peliculas.push(value2);
          });
        });

        this.arregloPeliculas = peliculas;
        // console.log(this.arregloPeliculas);
      }
    );

    this.obtenerId();

  }

  obtenerId() {

    let pelicula: any;
    this.httpClient.get(`http://localhost:1337/Pelicula/${this.transferencia[0].id}`).subscribe((data: any[]) => {
        pelicula = data;
        this.idUsuarioSolicitado = pelicula.actor.id;
        // console.log(pelicula.actor.id);
        console.log(this.idUsuarioSolicitado);
      }
    );
  }

  transferir(idPelicula) {

    this.httpClient.post(`http://localhost:1337/Peticiones`, {
      idUsuarioSolicitado: this.idUsuarioSolicitado,
      idPeliculaSolicitada: this.transferencia[0].id,
      idPeliculaCambio: idPelicula,
      estado: 1,
      usuario: this.idUsuario,
      }).subscribe(res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      });

    this.httpClient2.put(`http://localhost:1337/pelicula/${this.transferencia[0].id}`, {

      estado: false

    }).subscribe(
      res => {
      }
    );

    this.httpClient3.put(`http://localhost:1337/pelicula/${idPelicula}`, {

      estado: false

    }).subscribe(
      res => {
      }
    );

    this.transferencia = [];
    this._actorServicio.cambiarMensajeTransferencia(this.transferencia);

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


}
