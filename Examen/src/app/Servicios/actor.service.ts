import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private usuarioId;

  private fuenteMensaje = new BehaviorSubject<any>([]);

  private fuenteMensaje2 = new BehaviorSubject<any>([]);

  private fuenteMensaje3 = new BehaviorSubject<any>([]);

  private fuenteMensaje4 = new BehaviorSubject<any>({});

  private fuenteMensajeUsuario = new BehaviorSubject<any>([]);

  private fuenteMensajeTranferencia = new BehaviorSubject<any>([]);

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajeActual3 = this.fuenteMensaje3.asObservable();
  mensajeActual4 = this.fuenteMensaje4.asObservable();
  mensajeActualUsuario = this.fuenteMensajeUsuario.asObservable();
  mensajaActualTransferencia = this.fuenteMensajeTranferencia.asObservable();

  constructor() { }

  guardarUsuario(id) {
    this.usuarioId = id;
  }

  getUsuario(): number {
    return this.usuarioId;
  }


  cambiarMensaje(mensaje) {

    this.fuenteMensaje.next(mensaje);

  }

  cambiarMensaje2(mensaje) {

    this.fuenteMensaje2.next(mensaje);

  }

  cambiarMensaje3(mensaje) {

    this.fuenteMensaje3.next(mensaje);

  }

  cambiarMensaje4(mensaje) {

    this.fuenteMensaje4.next(mensaje);

  }

  cambiarMensajeUsuario(mensaje) {

    this.fuenteMensajeUsuario.next(mensaje);

  }

  cambiarMensajeTransferencia(mensaje) {

    this.fuenteMensajeTranferencia.next(mensaje);

  }
}
