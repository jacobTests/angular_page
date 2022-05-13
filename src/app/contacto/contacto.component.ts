import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
  }
  ngOnInit(): void {
  }

}
