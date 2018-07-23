import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  usuarioDetalle: any;
  actores: any;
  retirado = '';

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient ) {

    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });

  }

  ngOnInit() {
  }

  obtenerDatos(id) {
    this.httpClient.get(`http://localhost:1337/Usuario?id=${id}`).subscribe((data: any[]) => {
        this.usuarioDetalle = data;
        this.actores = data[0].actores;

      }
    );

  }

}
