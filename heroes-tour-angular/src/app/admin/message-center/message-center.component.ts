import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import Message from './../../model/message';
import { MessageService } from './../../service/message.service';
import Hero from '../../model/hero';
import { HeroService } from './../../service/hero.service';

@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.css']
})
export class MessageCenterComponent implements OnInit {
  messages: any[];
  private heroes: Hero[];
  constructor(
    private msgService: MessageService,
    private heroService: HeroService
  ) {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
    this.msgService.getMessages()
      .subscribe((msgs: Message[]) => {
        this.messages = [];
        msgs.map((msg: Message) => {
          this.messages.push({
            id: msg.id,
            auth: msg.auth,
            message: msg.message,
            addressee: this.parseAddressee(msg.addressee)
          });
        });
      });
  }
  private parseAddressee(id) {
    if (id === 0) {
      return 'All';
    }
    let addressee = '';
    this.heroes.forEach((hero: Hero) => {
      if (hero.id === id) {
        addressee = hero.name;
      }
    });
    return addressee;
  }

  ngOnInit() {
  }

}
