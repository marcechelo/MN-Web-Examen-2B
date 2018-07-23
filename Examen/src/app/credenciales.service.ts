import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {

  estaLogeado = false;
  constructor() {
  }
  login(password: string, passwordServer):Boolean {
    if (password === passwordServer) {
      this.estaLogeado = true;
      return true;
    } else {
      this.estaLogeado = false;
      return false;
    }

  }

  cookies(){
    this.estaLogeado = true;
  }

}
