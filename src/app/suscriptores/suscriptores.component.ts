import { Component, OnInit, Renderer2 } from '@angular/core';
import { SuscriptoresService } from '../shared/suscriptores.service';
import { Suscriptor } from '../suscriptores';

@Component({
  selector: 'app-suscriptores',
  templateUrl: './suscriptores.component.html',
  styleUrls: ['./suscriptores.component.css']
})
export class SuscriptoresComponent implements OnInit {

  suscriptores: Suscriptor[] = []
  constructor(private renderer: Renderer2, private suscriptoresService: SuscriptoresService) { 

    this.suscriptores = this.suscriptoresService.getSuscriptores()
    this.renderer.setStyle(document.body, 'background', 'url(../../assets/img/background.jpg) repeat 100%' );
    this.renderer.setStyle(document.body, 'background-size', 'contain');
    this.renderer.setStyle(document.body, 'background-position', 'center');
  }

  ngOnInit(): void {
  }

}
