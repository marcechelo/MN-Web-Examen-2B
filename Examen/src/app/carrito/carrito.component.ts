import {Component, OnInit} from '@angular/core';
import {ActorService} from '../Servicios/actor.service';
import {HttpClient} from '@angular/common/http';
import * as Cookies from 'js-cookie';
import {when} from 'q';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datosFactura: { nombre: string, apellido: string, direccion: string, correo: string };
  listaItems = [];
  items: number;
  total: number;
  idUsuario = Cookies.getJSON('cookieWeb').id;
  peticiones = [];
  peticiones2 = [];
  peticionesEnEspera = [];
  peticionesConfirmar = [];

  usuario = {
    username: '',
    nombre: '',
    apellido: '',
    imagen: '',
    actores: '',
  };

  constructor(private _actorServicio: ActorService,
              private httpClient: HttpClient,
              private httpClient2: HttpClient,
              private httpClient3: HttpClient) {
  }

  ngOnInit() {
    this._actorServicio.mensajeActual3.subscribe(mensaje => this.listaItems = mensaje);
    this._actorServicio.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje);
    this.items = this.listaItems.length;
    this.calcularTotal();

    this.httpClient.get(`http://localhost:1337/Usuario?id=${this.idUsuario}`).subscribe((data: any[]) => {
        this.usuario = data[0];
        // console.log(data[0]);
      }
    );

    this.httpClient2.get(`http://localhost:1337/Peticiones?usuario=${this.idUsuario}`).subscribe((data: any[]) => {
        this.peticiones = data;
        // console.log(data[0]);

        const peticionesEspera = [];
        this.peticiones.forEach(function (value) {
          if (value.estado === 1) {
            peticionesEspera.push(value);
          }

        });

        this.peticionesEnEspera = peticionesEspera;
      }
    );

    this.httpClient3.get(`http://localhost:1337/Peticiones?idUsuarioSolicitado=${this.idUsuario}`).subscribe((data: any[]) => {
        this.peticiones2 = data;
        // console.log(data[0]);

        const peticionesPorConfirmar = [];
        this.peticiones2.forEach(function (value) {
          if (value.estado === 1) {
            peticionesPorConfirmar.push(value);
          }

        });

        this.peticionesConfirmar = peticionesPorConfirmar;
      }
    );

  }

  eliminarItem(arregloIds, idpelicula) {

    this.total -= parseFloat(this.listaItems[arregloIds].precio);
    this.listaItems.splice(arregloIds, 1);
    this.cambiarEstado(idpelicula);
    this.mandarDatos();
  }

  mandarDatos() {
    this._actorServicio.cambiarMensaje3(this.listaItems);
  }

  private calcularTotal() {
    this.total = this.listaItems.reduce((acumulador, actual) => {
      acumulador += parseFloat(actual.precio);
      return acumulador;
    }, 0);
  }

  cambiarEstado(id) {
    this.httpClient.put(`http://localhost:1337/pelicula/${id}`, {

      estado: true

    }).subscribe(
      res => {
      }
    );
  }

  completarOrden() {

    for (let i = 0; i < this.listaItems.length; i++) {
      this.cambiarEstado(this.listaItems[i].id);
    }

    this.total = 0;
    this.listaItems = [];
    this.mandarDatos();
  }

  aceptar(idPeticion, actorMio, actorCambio, peliculaMia, peliculaCambio) {

    // console.log('mio', actorMio);
    // console.log('cambio', actorCambio);
    // console.log('pmio', peliculaMia);
    // console.log('pcambio', peliculaCambio);
    // console.log('peticion', idPeticion);

    this.httpClient.put(`http://localhost:1337/pelicula/${peliculaMia}`, {
      actor: actorCambio,
      estado: true
    }).subscribe(
      res => {
      }
    );

    this.httpClient.put(`http://localhost:1337/pelicula/${peliculaCambio}`, {
      actor: actorMio,
      estado: true
    }).subscribe(
      res => {
      }
    );

    this.httpClient2.delete(`http://localhost:1337/Peticiones/${idPeticion}`).subscribe((response) => {
      console.log('deleted');
    });
    window.location.reload();

  }

  rechazar(idPeticion, peliculaMia, peliculaCambio) {

    this.httpClient.put(`http://localhost:1337/pelicula/${peliculaMia}`, {
      estado: true
    }).subscribe(
      res => {
      }
    );

    this.httpClient.put(`http://localhost:1337/pelicula/${peliculaCambio}`, {
      estado: true
    }).subscribe(
      res => {
      }
    );

    this.httpClient2.delete(`http://localhost:1337/Peticiones/${idPeticion}`).subscribe((response) => {
      console.log('deleted');
    });
    window.location.reload();

  }


}
