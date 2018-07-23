import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-actor-deatalle',
  templateUrl: './actor-deatalle.component.html',
  styleUrls: ['./actor-deatalle.component.css']
})
export class ActorDeatalleComponent implements OnInit {

  actorDetalle: any;
  datosHijos: any;
  retirado = '';

  usuarioFoto = 'https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png';
  usuario = {
    nombre: '',
    apellido: '',
    username: '',
    id: ''
  };

  idUsuario: number;

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient ) {

    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });

  }

  ngOnInit() {
  }

  obtenerDatos(id) {
    this.httpClient.get(`http://localhost:1337/Actor?id=${id}`).subscribe((data: any[]) => {
          this.actorDetalle = data;
          this.datosHijos = data[0].peliculas;
          this.usuario = data[0].usuario;
          // this.idUsuario = this.usuario.id;
          console.log(this.usuario);

        if (this.actorDetalle[0].retirado === true) {
          this.retirado = 'Si';
        } else {
          this.retirado = 'No';
        }

        }
      );

  }

}
