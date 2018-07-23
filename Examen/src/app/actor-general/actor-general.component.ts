import {Component, Input, OnInit} from '@angular/core';
import {ActorService} from '../Servicios/actor.service';

@Component({
  selector: 'app-actor-general',
  templateUrl: './actor-general.component.html',
  styleUrls: ['./actor-general.component.css']
})
export class ActorGeneralComponent implements OnInit {

  @Input() resultadosDesa: any;
  constructor(private _actorServicio: ActorService) { }

  ngOnInit() {
    this._actorServicio.mensajeActual.subscribe(mensaje => this.resultadosDesa = mensaje);
  }

  datosPelicula() {
    this._actorServicio.cambiarMensaje2(this.resultadosDesa[0].juegos);
  }

}
