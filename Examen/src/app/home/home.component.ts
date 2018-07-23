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

  contadorCuatro = 0;
  contadorDos = 0;

  constructor(private httpClient: HttpClient,
              private httpClient2: HttpClient,
              private httpClient3: HttpClient,
              private _actorServicio: ActorService,
              private _router: Router,
              private _credenciales: CredencialesService) {

    this.Actores = [];
    this.Peliculas = [];
    this.Usuarios = [];

  }

  ngOnInit() {

    this.Actores = [];
    this.Peliculas = [];
    this.Usuarios = [];

    this._actorServicio.mensajeActual.subscribe(mensaje => this.Actores = mensaje);
    this._actorServicio.mensajeActual2.subscribe(mensaje => this.Peliculas = mensaje);
    this._actorServicio.mensajeActualUsuario.subscribe(mensaje => this.Usuarios = mensaje);
    this.ocultarElementos();
    this.ocultarBotones();

  }

  onNameKeyUp(event: any) {
    this.buscar = event.target.value;
  }

  getProfile() {
    this.httpClient.get(`http://localhost:1337/buscarActores/${this.buscar}/limite/${this.contadorDos}`).subscribe((data: any[]) => {
        this.Actores = data;
      }
    );

    /*this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.buscar}/limite/${this.contadorCuatro}`)
    .subscribe((data: any[]) => {
        this.Peliculas = data;
      }
    );*/

    this.httpClient2.get(`http://localhost:1337/buscarPeliculaTodo/${this.buscar}`).subscribe((data: any[]) => {
        const peliculasAux = data;
        // this.Peliculas = data;

      if (peliculasAux.length > 4) {

        this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.buscar}/limite/${this.contadorCuatro}`)
          .subscribe((data2: any[]) => {
            this.Peliculas = data2;
          }
        );
        const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById('peliculaSiguiente');
        botonPeliculaSiguiente.style.display = 'block';
        const botonPeliculaAnterior = <HTMLFormElement>document.getElementById('peliculaAnterior');
        botonPeliculaAnterior.style.display = 'block';

        this.contadorCuatro += 4;

      } else {
        this.Peliculas = data;
      }
      }
    );

    this.httpClient3.get(`http://localhost:1337/buscarUsuarios/${this.buscar}/limite/${this.contadorCuatro}`).subscribe((data: any[]) => {
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

  ocultarBotones() {
    const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById('peliculaSiguiente');
    botonPeliculaSiguiente.style.display = 'none';

    const botonPeliculaAnterior = <HTMLFormElement>document.getElementById('peliculaAnterior');
    botonPeliculaAnterior.style.display = 'none';
  }

  mostrarMas() {

    this.ocultarElementos();

    this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.buscar}/limite/${this.contadorCuatro}`).subscribe((data: any[]) => {
        this.Peliculas = data;

      if (this.Peliculas.length <= 4) {
        const botonPeliculaSiguiente2 = <HTMLFormElement>document.getElementById('peliculaSiguiente');
        botonPeliculaSiguiente2.style.display = 'none';
      } else { console.log(''); }

      this.mandarDatos();
      this.mostrarElementos();
      }
    );

    this.contadorCuatro += 4;

  }

  mostrarAnteriores() {

    this.ocultarElementos();
    this.contadorCuatro -= 4;

    this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.buscar}/limite/${this.contadorCuatro}`).subscribe((data: any[]) => {
        this.Peliculas = data;

        this.mandarDatos();
        this.mostrarElementos();
      }
    );
    const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById('peliculaSiguiente');
    botonPeliculaSiguiente.style.display = 'block';
  }

}
