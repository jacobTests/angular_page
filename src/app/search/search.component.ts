import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../heroes';
import { HeroeService } from '../shared/heroe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreH: string = "";
  indice: number = 0;
  seconds = 5;

  miHeroe: Heroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  };

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private renderer: Renderer2, private router: Router) {
    this.renderer.setStyle(document.body, 'background', 'url(../../assets/img/bg.jpg) no-repeat 50%');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
    this.activatedRoute.params.subscribe(params => {
      this.nombreH = params['nombreH'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreH);
      console.log(this.indice);
      if (this.indice != -1) {
        this.miHeroe = this.heroeService.getUnHeroe(this.indice)
      }
      this.countdownTimer()
    });
  }

  ngOnInit(): void {
  }

  countdownTimer() {
    setInterval(() => {
      this.updateSecs()
    }, 1000);
  }

  updateSecs() {
    this.seconds--;
    if (this.seconds == -1) {
      this.router.navigate(['heroes']);
    }
  }
}
