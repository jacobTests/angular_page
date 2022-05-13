import { Injectable } from '@angular/core';
import { Suscriptor } from '../suscriptores';

@Injectable({
  providedIn: 'root'
})
export class SuscriptoresService {

  private suscriptores: Suscriptor[] = [];

  constructor() {
    this.suscriptores = JSON.parse(localStorage.getItem("suscriptores") || '[]');
  }

  getSuscriptores() {
    return this.suscriptores
  }

  agregarSuscriptor(suscriptor: Suscriptor) {
    this.suscriptores.push(suscriptor);
    localStorage.setItem("suscriptores", JSON.stringify(this.suscriptores));
  }

  nuevoSuscriptor(): Suscriptor {
    return {
      nombre: "",
      apellido: "",
      sexo: "",
      birthdate: "",
      email: ""
    };
  }

}
