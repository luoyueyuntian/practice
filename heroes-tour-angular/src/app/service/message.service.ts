import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';

import Message from './../model/message';

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
      auth,
      message: msg,
      addressee
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
