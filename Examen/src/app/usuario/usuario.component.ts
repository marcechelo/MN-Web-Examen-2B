import {Component, Input, OnInit} from '@angular/core';
import {ActorService} from '../Servicios/actor.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() resultadosDesa: any;
  constructor(private _actorServicio: ActorService) { }

  ngOnInit() {
    this._actorServicio.mensajeActualUsuario.subscribe(mensaje => this.resultadosDesa = mensaje);
  }

  datosPelicula() {
    this._actorServicio.cambiarMensaje(this.resultadosDesa[0].actores);
    this._actorServicio.cambiarMensaje2(this.resultadosDesa[0].actores.peliculas);
  }

}
