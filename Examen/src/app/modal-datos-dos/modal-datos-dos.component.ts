import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActorService} from '../Servicios/actor.service';

@Component({
  selector: 'app-modal-datos-dos',
  templateUrl: './modal-datos-dos.component.html',
  styleUrls: ['./modal-datos-dos.component.css']
})
export class ModalDatosDosComponent implements OnInit {

  formCabecera: FormGroup;
  datosFactura;

  constructor(private _actorServicio: ActorService) {
    this.createForm();
  }

  ngOnInit() {
    this._actorServicio.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje);
  }

  private createForm() {
    this.formCabecera = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required)
    });
  }

  agregarDatos(formData) {

    this.datosFactura = {
      'nombre': formData.value.nombre,
      'apellido': formData.value.apellido,
      'direccion': formData.value.direccion,
      'correo': formData.value.correo
    };

    this.resetForm();
    this.mandarDatos();

  }

  mandarDatos() {
    this._actorServicio.cambiarMensaje4(this.datosFactura);
  }

  resetForm() {

    const resetForm = <HTMLFormElement>document.getElementById('formCabecera');
    resetForm.reset();
  }

}
