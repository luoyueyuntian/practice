import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Hero from '../../model/hero';
import { HeroService } from './../../service/hero.service';
import Message from './../../model/message';
import { MessageService } from './../../service/message.service';


@Component({
  selector: 'app-hero-manage',
  templateUrl: './hero-manage.component.html',
  styleUrls: ['./hero-manage.component.css']
})
export class HeroManageComponent implements OnInit {
  heroes: Observable<Hero[]>;
  newHeroName: string;
  selectedHero: Hero;
  receiveMsg: Message[];
  modifiedHeroName: string;
  private msgLibary: Message[];
  constructor(
    private router: Router,
    private heroService: HeroService,
    private msgService: MessageService
  ) {
    this.heroes = this.heroService.getHeroes();
    this.msgService.getMessages()
      .subscribe((msgs: Message[]) => {
        this.updateMsgInfo(msgs);
      });
  }
  private updateMsgInfo(msgs: Message[]): void {
    this.msgLibary = msgs;
    this.refleshReceieveMsg();
  }
  private refleshReceieveMsg(): void {
    this.receiveMsg = [];
    this.msgLibary.forEach((msg: Message) => {
      if (msg.addressee === 0) {
        this.receiveMsg.push(msg);
      } else if (this.selectedHero && msg.addressee === this.selectedHero.id) {
        this.receiveMsg.push(msg);
      }
    });
  }
  viewDetail(hero: Hero): void {
    this.selectedHero = hero;
    this.modifiedHeroName = hero.name;
    this.refleshReceieveMsg();
  }
  deleteHero(hero: Hero): void {
    this.heroes = this.heroService.deleteHero(hero);
  }
  addHero(): void {
    if (this.newHeroName === '') {
      return;
    }
    this.heroService.addHero(this.newHeroName).pipe(map(status => {
      this.heroes = this.heroService.getHeroes();
      this.newHeroName = '';
    }));
  }
  save(): void {
    this.selectedHero.name = this.modifiedHeroName;
    this.modifiedHeroName = '';
    this.selectedHero = null;
  }
  cancel() {
    this.modifiedHeroName = '';
    this.selectedHero = null;
  }
  ngOnInit() {
  }

}
