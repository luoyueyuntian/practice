import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Hero from '../model/hero';
import { HeroService } from './../service/hero.service';
import Message from './../model/message';
import { MessageService } from './../service/message.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  message: string;
  addressee: Hero = { name: 'All', id: 0 };
  heroes: Hero[];
  private unsbuscribe: () => void;
  constructor(
    private router: Router,
    private heroService: HeroService,
    private msgService: MessageService
  ) {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = [this.addressee].concat(heroes);
    });
  }
  sendMessage(): void {
    this.msgService.addMessage(this.message, undefined, this.addressee.id);
  }
  close(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
  ngOnInit() {
  }

}
