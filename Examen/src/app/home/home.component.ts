import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActorService} from '../Servicios/actor.service';
import {Router} from '@angular/router';
import {CredencialesService} from '../credenciales.service';
import * as Cookies from 'js-cookie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buscar = '';
  Actores = [];
  Peliculas = [];
  Usuarios = [];
  data = {};

  constructor(private httpClient: HttpClient,
              private httpClient2: HttpClient,
              private httpClient3: HttpClient,
              private _actorServicio: ActorService,
              private _router: Router,
              private _credenciales: CredencialesService) {

  }

  ngOnInit() {

    this.Actores = [];
    this.Peliculas = [];
    this.Usuarios = [];

    this._actorServicio.mensajeActual.subscribe(mensaje => this.Actores = mensaje);
    this._actorServicio.mensajeActual2.subscribe(mensaje => this.Peliculas = mensaje);
    this._actorServicio.mensajeActualUsuario.subscribe(mensaje => this.Usuarios = mensaje);
    this.ocultarElementos();
  }

  onNameKeyUp(event: any) {
    this.buscar = event.target.value;
  }

  getProfile() {
    this.httpClient.get(`http://localhost:1337/buscarActores/${this.buscar}`).subscribe((data: any[]) => {
        this.Actores = data;
      }
    );

    this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.buscar}`).subscribe((data: any[]) => {
        this.Peliculas = data;
      }
    );

    this.httpClient3.get(`http://localhost:1337/buscarUsuarios/${this.buscar}`).subscribe((data: any[]) => {
        this.Usuarios = data;
      }
    );

    this.mandarDatos();
    this.mostrarElementos();
  }

  mandarDatos() {

    this._actorServicio.cambiarMensaje(this.Actores);
    this._actorServicio.cambiarMensaje2(this.Peliculas);
    this._actorServicio.cambiarMensajeUsuario(this.Usuarios);
  }

  mostrarElementos() {

    const mostrarLabelActor = <HTMLFormElement>document.getElementById('tituloDesa');
    mostrarLabelActor.style.display = 'block';

    const mostrarLabelPelicula = <HTMLFormElement>document.getElementById('tituloPelicula');
    mostrarLabelPelicula.style.display = 'block';

    const mostrarLabelUsuario = <HTMLFormElement>document.getElementById('usuario');
    mostrarLabelUsuario.style.display = 'block';

  }

  ocultarElementos() {

    const mostrarLabelActor = <HTMLFormElement>document.getElementById('tituloDesa');
    mostrarLabelActor.style.display = 'none';

    const mostrarLabelPelicula = <HTMLFormElement>document.getElementById('tituloPelicula');
    mostrarLabelPelicula.style.display = 'none';

    const mostrarLabelUsuario = <HTMLFormElement>document.getElementById('usuario');
    mostrarLabelUsuario.style.display = 'none';

  }

}
