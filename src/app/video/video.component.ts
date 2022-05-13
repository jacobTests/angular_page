import { Component, OnInit, Renderer2 } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { DomseguroPipe } from '../domseguro.pipe';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  title = 'pipesAngular';
  video='UfbxHWguSq0';
  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'background-image', 'none');
  }

  ngOnInit(): void {
    
  }

}
