import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
  }

  ngOnInit(): void {
  }

}
