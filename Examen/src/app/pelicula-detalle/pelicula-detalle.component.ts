import {Component, Input, OnInit} from '@angular/core';
import {ActorService} from '../Servicios/actor.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() peliculas: any;


  constructor(private _actorServicio: ActorService) { }

  ngOnInit() {
    this._actorServicio.mensajeActual2.subscribe(mensaje => this.peliculas = mensaje);
  }

  identificador(id: any) {
    if (isNaN(id)) {
      return id.id;

    } else {
      return id;
    }
  }


}
