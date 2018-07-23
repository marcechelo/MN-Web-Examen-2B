import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ActorService} from '../Servicios/actor.service';
import {CredencialesService} from '../credenciales.service';
import * as Cookies from 'js-cookie';

@Component({
  selector: 'app-pelicula-detalle-dos',
  templateUrl: './pelicula-detalle-dos.component.html',
  styleUrls: ['./pelicula-detalle-dos.component.css']
})
export class PeliculaDetalleDosComponent implements OnInit {

  peliculaDetalle = {
    nombre: '',
    anioLanzamiento: '',
    rating: '',
    actoresPrincipales: '',
    sinopsis: '',
    imagen: '',
    precio: '',
    estado: '',
    id: ''
  };

  transferencia = [];

  peliculaDetalleRow: any;
  actor: any;
  usuario: any;

  idUsuario = Cookies.getJSON('cookieWeb').id;

  estadoUno = '';
  estadoIni: any;
  arregloCarrito = [];
  estado = false;

  constructor(private _router: Router,
              private httpClient: HttpClient,
              private _activatedRoute: ActivatedRoute,
              private _actorServicio: ActorService,
              private _credenciales: CredencialesService) {

    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['idPelicula']);

    });

  }

  ngOnInit() {
    this._actorServicio.mensajeActual3.subscribe(mensaje => this.arregloCarrito = mensaje);
    this._actorServicio.cambiarMensajeTransferencia(this.transferencia);
  }

  obtenerDatos(id) {
    this.httpClient.get(`http://localhost:1337/pelicula?id=${id}`).subscribe((data: any[]) => {
        this.peliculaDetalleRow = data;
        this.actor = this.peliculaDetalleRow[0].actor;
        this.usuario = this.actor.usuario;


        this.peliculaDetalle = data[0];
        this.estadoIni = this.peliculaDetalle.estado;

      this.verDueño(this.usuario, this.estadoIni);
        // this.verEstado(this.estadoIni);

      }
    );

  }

  validarCooki() {
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

  agregarDatos(id) {

    // this.cambiarEstado(id);
    this.arregloCarrito.push(this.peliculaDetalle);
    this.transferencia.push(this.peliculaDetalle);
    this.ocultarElementos();
    this.mandarDatos();
  }

  mandarDatos() {
    this._actorServicio.cambiarMensaje3(this.arregloCarrito);
    this._actorServicio.cambiarMensajeTransferencia(this.transferencia);
  }

  cambiarEstado(id) {
    this.httpClient.put(`http://localhost:1337/pelicula/${id}`, {
      estado: false
    }).subscribe(
      res => {
      }
    );
  }

  ocultarElementos() {

    /*var mostrarLabelDesarrolladora = <HTMLFormElement>document.getElementById('tituloDesa');
    mostrarLabelDesarrolladora.style.display = "none";

    var mostrarLabelJuego = <HTMLFormElement>document.getElementById('tituloJuego');
    mostrarLabelJuego.style.display = "none";

    var mostrarJuegos = <HTMLFormElement>document.getElementById('disponible');
    mostrarJuegos.style.display = "none";

    var mostrarListJuegos = <HTMLFormElement>document.getElementById('listaJuegos');
    mostrarListJuegos.style.display = "none";*/

  }

  verEstado(estado) {

    console.log('estado ', estado);

    if (estado) {

      this.estadoUno = 'Disponible';
      const mostrarPeliculas = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarPeliculas.style.display = 'block';
      /*const mostrarPeliculas1 = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarPeliculas1.style.display = 'none';*/

    } else {

      this.estadoUno = 'No Disponible';
      const mostrarPeliculas2 = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarPeliculas2.style.display = 'none';
      /*const mostrarPeliculas3 = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarPeliculas3.style.display = 'block';*/

    }

  }

  verDueño(usuario, estado) {

    let dueño: boolean;
    const json = Cookies.getJSON('cookieWeb');
    if (json.id === usuario) {
      dueño = true;

    } else {
      dueño = false;
    }

    if (dueño) {

      this.estadoUno = 'Es el dueño';
      const mostrarPeliculas = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarPeliculas.style.display = 'none';
      /*const mostrarPeliculas1 = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarPeliculas1.style.display = 'none';*/

    } else {

      if (estado) {

        this.estadoUno = 'Disponible';
        const mostrarPeliculas2 = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
        mostrarPeliculas2.style.display = 'block';
        /*const mostrarPeliculas3 = <HTMLFormElement>document.getElementById('noDisponible');
        mostrarPeliculas3.style.display = 'block';*/

      } else {
        this.estadoUno = 'En espera de Intercambio';
        const mostrarPeliculas = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
        mostrarPeliculas.style.display = 'none';
      }

    }

  }

}
