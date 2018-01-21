import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import Message from './../model/message';
import { Subject } from 'rxjs/Subject';

import { AuthService } from './auth.service';

@Injectable()
export class MessageService {
  private _messages: Message[] = [];
  private unusedId: number;
  private messages: Subject<Message[]>;
  private relateHeroSubscription: Subscription;
  constructor(
    private authService: AuthService
  ) {
    this.unusedId = 0;
    this.messages = new BehaviorSubject([]);
  }
  getMessages(): Observable<Message[]> {
    return this.messages;
  }
  addMessage(msg: string, addressee = -1): void {
    let auth = 'visitor';
    if (this.authService.getLoginStatus()) {
      auth = 'admin';
    }
    this._messages.push({
      id: this.unusedId++,
      auth: auth,
      message: msg,
      addressee: addressee
    });
    this.messages.next(this._messages);
  }
  getHeroRelateMsg(heroId: number): Observable<Message[]> {
    if (this.relateHeroSubscription !== undefined) {
      this.relateHeroSubscription.unsubscribe();
    }
    const observerable = new BehaviorSubject([]);
    this.relateHeroSubscription = this.messages
      .subscribe((msgs: Message[]) => {
        const matchMessages: Message[] = [];
        const MATCH_ALL = 0;
        this._messages.forEach((message: Message) => {
          if (message.addressee === MATCH_ALL) {
            matchMessages.push(message);
          }
          if (message.addressee === heroId) {
            matchMessages.push(message);
          }
          observerable.next(matchMessages);
        });
      });
    return observerable;
  }
}
