import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuscriptoresService } from '../shared/suscriptores.service';
import { Suscriptor } from '../suscriptores';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  reactiveForm: FormGroup;
  suscriptor!: Suscriptor
  @ViewChild('closebutton') closebutton: any;
  constructor(
    private renderer: Renderer2,
    private builder: FormBuilder, private suscriptoresService: SuscriptoresService
  ) {
    this.renderer.setStyle(document.body, 'background', 'url(../../assets/img/background.jpg) repeat 100%' );
    this.renderer.setStyle(document.body, 'background-size', 'contain');
    this.renderer.setStyle(document.body, 'background-position', 'center');
    this.reactiveForm = this.builder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      email: [null, Validators.email],
      sexo: [null, Validators.required],
      terms: [null, Validators.required],
      birth: [null, Validators.required]
    });
  }


  ngOnInit(): void {
    this.suscriptor = this.suscriptoresService.nuevoSuscriptor();
  }


  agregarSuscriptor() {
    this.closebutton.nativeElement.click();
    this.suscriptoresService.agregarSuscriptor(this.suscriptor);
    this.suscriptor = this.suscriptoresService.nuevoSuscriptor();
    Swal.fire({
      title: "Gracias!",
      icon: "success",
      text: "Tu suscripción se ha relizado correctamente",
      confirmButtonColor: "#343a40",
      backdrop: `rgba(247,118,1,.6)
      url(../../assets/img/gif-marvelgif.gif)
      right top
      no-repeat`
    });
  }
}
